#define PENQ_LUAGAME

#include <string.h>

#include <GL/gl.h>
#include <GL/glu.h>
#include <GL/glut.h>

#include <lua/lua.h>
#include <lua/lauxlib.h>
#include <lua/lualib.h>

#include "FreeImage.h"


enum 
{
	LGME_MOVE = 0x00000001, 
	LGME_DOWN = 0x00000002,
	LGME_DOWNMOVE = 0x00000004,
	LGME_UP = 0x00000008,
	LGME_ENTRY = 0x00000010,
	LGME_LEAVE = 0x00000020
};

struct LGMain
{
	lua_State *		L;
	GLint			w;
	GLint			h;
	GLfloat			zoom;
	GLuint			mouse_event;
	GLuint			key_event;
	GLint			fps;
}G_Main = {NULL,0, 0, 0.0f, 0, 0, 0};


struct LGImage
{
	GLint	width;
	GLint	height;
	GLuint 	texture;
	GLint	has_alpha_channel;
};
typedef struct LGImage LGImage;


typedef struct 
{
	int				w;
	int 			h;
	unsigned char	*buf;
	GLint			has_alpha_channel;
}GLBITMAP;





GLBITMAP * FIBitmap2GLBitmap(FIBITMAP *fibmp)
{
	int i, j, k;
	int pitch = FreeImage_GetPitch(fibmp);
	unsigned char *bits = FreeImage_GetBits(fibmp);
	int bpp = FreeImage_GetBPP(fibmp);
	GLBITMAP *glbmp = (GLBITMAP *)malloc(sizeof(GLBITMAP));	
	RGBQUAD *palette = NULL;

	if ( !glbmp ) return NULL;
	
	glbmp->has_alpha_channel = 0;
	glbmp->w = FreeImage_GetWidth(fibmp);
	glbmp->h = FreeImage_GetHeight(fibmp);		

	switch ( bpp ) {
	case 8:
		if ( !(palette = FreeImage_GetPalette(fibmp)) ) return NULL; 
		if ( !(glbmp->buf = (unsigned char *)malloc(glbmp->w*glbmp->h*3)) ) return NULL;
		for ( i = 0; i < glbmp->h; ++i ) {
			for ( j = 0; j < glbmp->w; ++j ) {
				k = bits[i*pitch+j];
				glbmp->buf[(i*glbmp->w+j)*3+0] = palette[k].rgbRed;
				glbmp->buf[(i*glbmp->w+j)*3+1] = palette[k].rgbGreen;
				glbmp->buf[(i*glbmp->w+j)*3+2] = palette[k].rgbBlue;
			}
		}
		break;
	case 24:
		if ( !(glbmp->buf = (unsigned char *)malloc(glbmp->w*glbmp->h*3)) ) return NULL;
		for ( i = 0; i < glbmp->h; ++i ) {
			for ( j = 0; j < glbmp->w; ++j ) {
				glbmp->buf[(i*glbmp->w+j)*3+0] = bits[i*pitch+j*3+2];
				glbmp->buf[(i*glbmp->w+j)*3+1] = bits[i*pitch+j*3+1];
				glbmp->buf[(i*glbmp->w+j)*3+2] = bits[i*pitch+j*3+0];
			}
		}
		break;
	case 32:
		if ( !(glbmp->buf = (unsigned char *)malloc(glbmp->w*glbmp->h*4)) ) return NULL;
		glbmp->has_alpha_channel = 1;
		for ( i = 0; i < glbmp->h; ++i ) {
			for ( j = 0; j < glbmp->w; ++j ) {
				glbmp->buf[(i*glbmp->w+j)*4+0] = bits[i*pitch+j*4+2];
				glbmp->buf[(i*glbmp->w+j)*4+1] = bits[i*pitch+j*4+1];
				glbmp->buf[(i*glbmp->w+j)*4+2] = bits[i*pitch+j*4+0];
				glbmp->buf[(i*glbmp->w+j)*4+3] = bits[i*pitch+j*4+3];
			}
		}
		break;
	default: return NULL;	
	}

	return glbmp;
}

void FreeGLBitmap(GLBITMAP *glbmp)
{
	if ( glbmp ) {
		if ( glbmp->buf ) free(glbmp->buf);
		free(glbmp);
	}
}

LGImage * LoadLGImage(const char *filename)
{
	FREE_IMAGE_FORMAT fif = FIF_UNKNOWN;
	FIBITMAP *bitmap = NULL;
	GLBITMAP *glbmp = NULL;
	LGImage *image = NULL;

	fif = FreeImage_GetFileType(filename, 0);
	if ( FIF_UNKNOWN == fif ) {
		fif = FreeImage_GetFIFFromFilename(filename);
		if ( FIF_UNKNOWN == fif )
			return 0;	
	}
	if ( FreeImage_FIFSupportsReading(fif) ) 
		bitmap = FreeImage_Load(fif, filename, 0);
	
	if ( !bitmap ) 
		return 0;

	if ( !(glbmp = FIBitmap2GLBitmap(bitmap)) ) {
		FreeImage_Unload(bitmap);
		return 0;
	}

	if ( !(image = (LGImage *)malloc(sizeof(LGImage))) ) {
		FreeGLBitmap(glbmp);
		FreeImage_Unload(bitmap);
		return 0;
	}

	image->width = glbmp->w;
	image->height = glbmp->h;
	image->has_alpha_channel = glbmp->has_alpha_channel;
	
	glEnable(GL_TEXTURE_2D);
	glGenTextures(1, &image->texture);
	glBindTexture(GL_TEXTURE_2D, image->texture);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
	if ( glbmp->has_alpha_channel )
		glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, glbmp->w, glbmp->h, 0, GL_RGBA, GL_UNSIGNED_BYTE, glbmp->buf);
	else
		glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, glbmp->w, glbmp->h, 0, GL_RGB, GL_UNSIGNED_BYTE, glbmp->buf);
	
	glDisable(GL_TEXTURE_2D);
	
	FreeGLBitmap(glbmp);
	FreeImage_Unload(bitmap);

	return image;
}




static void init_gl()
{
	glShadeModel(GL_SMOOTH);
	glClearColor(0.0f, 0.0f, 0.0f, 0.0f);
	glClearDepth(1.0f);
	glEnable(GL_DEPTH_TEST);
	glDepthFunc(GL_LEQUAL);
	glHint(GL_PERSPECTIVE_CORRECTION_HINT, GL_NICEST);
}


static void reshape(GLint w, GLint h)
{
	if ( 0 == h ) h = 1;
	G_Main.w = w;
	G_Main.h = h;
	G_Main.zoom = (GLfloat)w;
	glViewport(0, 0, w, h);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluOrtho2D(0.0f, (GLfloat)w, 0.0f, (GLfloat)h);	
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
	
	if ( G_Main.L ) {
		lua_getglobal(G_Main.L, "LuaGame_Reshape");
		lua_pushnumber(G_Main.L, w);
		lua_pushnumber(G_Main.L, h);
		lua_pcall(G_Main.L, 2, 0, 0);	
	}
}

static void display()
{
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	if ( G_Main.L ) {
		lua_getglobal(G_Main.L, "LuaGame_Display");
		lua_pcall(G_Main.L, 0, 0, 0);
	}

	glutSwapBuffers();
}

static void mouse(int button, int state, int x, int y)
{
	if ( GLUT_DOWN == state ) {
		if ( G_Main.mouse_event & LGME_DOWN ) {
			if ( G_Main.L ) {
				lua_getglobal(G_Main.L, "LuaGame_MouseDown");
				lua_pushnumber(G_Main.L, button);
				lua_pushnumber(G_Main.L, x);	
				lua_pushnumber(G_Main.L, G_Main.h-y);
				lua_pcall(G_Main.L, 3, 0, 0);	
			}		
		}	
	} else if ( GLUT_UP == state ) {
		if ( G_Main.mouse_event & LGME_UP ) {
			if ( G_Main.L ) {
				lua_getglobal(G_Main.L, "LuaGame_MouseUp");
				lua_pushnumber(G_Main.L, button);
				lua_pushnumber(G_Main.L, x);	
				lua_pushnumber(G_Main.L, G_Main.h-y);
				lua_pcall(G_Main.L, 3, 0, 0);	
			}		
		}
	}
}

static void mouse_move(int x, int y)
{
	if ( G_Main.mouse_event & LGME_MOVE ) {
		if ( G_Main.L ) {
			lua_getglobal(G_Main.L, "LuaGame_MouseMove");
			lua_pushnumber(G_Main.L, x);	
			lua_pushnumber(G_Main.L, G_Main.h-y);
			lua_pcall(G_Main.L, 2, 0, 0);	
		}
	}
}

static void mouse_down_move(int x, int y)
{
	if ( G_Main.mouse_event & LGME_DOWNMOVE ) {
		if ( G_Main.L ) {
			lua_getglobal(G_Main.L, "LuaGame_MouseDownMove");
			lua_pushnumber(G_Main.L, x);	
			lua_pushnumber(G_Main.L, G_Main.h-y);
			lua_pcall(G_Main.L, 2, 0, 0);		
		}
	}
}

static void mouse_foucs(int state)
{
	if ( GLUT_LEFT == state ) {
		if ( G_Main.mouse_event & LGME_LEAVE ) {
			if ( G_Main.L ) {
				lua_getglobal(G_Main.L, "LuaGame_MouseLeave");
				lua_pcall(G_Main.L, 0, 0, 0);
			}
		}	
	} else if ( GLUT_ENTERED == state ) {
		if ( G_Main.mouse_event & LGME_ENTRY ) {
			if ( G_Main.L ) {
				lua_getglobal(G_Main.L, "LuaGame_MouseEntry");
				lua_pcall(G_Main.L, 0, 0, 0);
			}
		}
	}
}

static void keyboard(unsigned char key, int x, int y)
{
	if ( G_Main.key_event ) {
		if ( G_Main.L ) {
			lua_getglobal(G_Main.L, "LuaGame_Keyboard");
			lua_pushnumber(G_Main.L, key);
			lua_pushnumber(G_Main.L, x);
			lua_pushnumber(G_Main.L, y);
			lua_pcall(G_Main.L, 3, 0, 0);
		}
	}
}

static void on_timer(int value)
{
	if ( 1 == value ) {
		if ( G_Main.L ) {
			lua_getglobal(G_Main.L, "LuaGame_MainLoop");
			lua_pcall(G_Main.L, 0, 0, 0);	
		}
	}

	display();	
	glutTimerFunc(G_Main.fps, on_timer, 1);
}


int getfield(lua_State *L, const char *key)
{
	int result;
	lua_pushstring(L, key);
	lua_gettable(L, -2);	/* 这里调用完后key的值会被弹出，然后才压入table.key的值到栈顶 */
	result = lua_isnumber(L, -1) ? (int)lua_tonumber(L, -1) : 0;
	lua_pop(L, 1);
	return result;
}




/*
	$@@ 引擎初始化
	$@ 返回值: 成功true, 否则false
*/
static int LuaGame_Init(lua_State *L)
{
	int argc = 1;
	char *argv[1] = {"LuaGame"};

#if defined(FREEIMAGE_LIB)
	FreeImage_Initialise(0);
#endif

	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGBA | GLUT_DEPTH);
	lua_pushboolean(L, 1);
	return 1;
}


/*
	$@@ 创建窗体(5个参数)
	$@ 第一个参数: 窗体名
	$@ 第二个参数: 窗体初始位置的x坐标
	$@ 第三个参数: 窗体初始位置的y坐标
	$@ 第四个参数: 窗体的宽
	$@ 第五个参数: 窗体的高
	$@ 返回值: 成功true, 否则false
*/
static int LuaGame_CreateWindow(lua_State *L)
{
	const char *caption = luaL_checkstring(L, 1);
	int x = luaL_checknumber(L, 2);
	int y = luaL_checknumber(L, 3);
	int w = luaL_checknumber(L, 4);
	int h = luaL_checknumber(L, 5);

	glutInitWindowPosition(x, y);
	glutInitWindowSize(w, h);
	
	if ( glutCreateWindow(caption) ) {
		init_gl();
	
		glutMouseFunc(mouse);
		glutMotionFunc(mouse_down_move);
		glutPassiveMotionFunc(mouse_move);
		glutEntryFunc(mouse_foucs);
		glutKeyboardFunc(keyboard);
		glutReshapeFunc(reshape);
		glutDisplayFunc(display);

		lua_pushboolean(L, 1);
	} else
		lua_pushboolean(L, 0);

	return 1;
}



/*
	$@@ 开启鼠标移动监听事件
*/
static int LuaGame_SetMouseMove(lua_State *L)
{
	G_Main.mouse_event |= LGME_MOVE;
	return 0;
}


/*
	$@@ 开启鼠标按下监听事件
*/
static int LuaGame_SetMouseDown(lua_State *L)
{
	G_Main.mouse_event |= LGME_DOWN;
	return 0;
}

/*
	$@@ 开启鼠标按下时移动监听事件
*/
static int LuaGame_SetMouseDownMove(lua_State *L)
{
	G_Main.mouse_event |= LGME_DOWNMOVE;
	return 0;
}


/*
	$@@ 开启鼠标弹起监听事件
*/
static int LuaGame_SetMouseUp(lua_State *L)
{
	G_Main.mouse_event |= LGME_UP;
	return 0;
}

/*
	$@@ 开启鼠标进入监听事件
*/
static int LuaGame_SetMouseEntry(lua_State *L)
{
	G_Main.mouse_event |= LGME_ENTRY;
	return 0;
}


/*
	$@@ 开启鼠标离开监听事件
*/
static int LuaGame_SetMouseLeave(lua_State *L)
{
	G_Main.mouse_event |= LGME_LEAVE;
	return 0;
}



/*
	$@@ 设置键盘监听事件
*/
static int LuaGame_SetKeyboard(lua_State *L)
{
	G_Main.key_event = 1;
	return 0;
}


static int LuaGame_DrawLine(lua_State *L)
{
	unsigned char r, g, b;	
	int start_x = (int)luaL_checknumber(L, 1);
	int start_y = (int)luaL_checknumber(L, 2);
	int end_x = (int)luaL_checknumber(L, 3);
	int end_y = (int)luaL_checknumber(L, 4);

	lua_pushvalue(L, 5);
	r = (unsigned char)getfield(L, "red");
	g = (unsigned char)getfield(L, "green");
	b = (unsigned char)getfield(L, "blue");	
	lua_pop(L, 1);

	glColor3f((GLfloat)r/255.0f, (GLfloat)g/255.0f, (GLfloat)b/255.0f);
	glBegin(GL_LINES);
		glVertex3d(start_x, start_y, 0);
		glVertex3d(end_x, end_y, 0);	
	glEnd();
	
	return 0;
}


static int LuaGame_CreateImage(lua_State *L)
{
	const char *filename = luaL_checkstring(L, 1);
	LGImage *image = NULL;
	
	if ( filename ) {
		if ( (image = LoadLGImage(filename)) ) {
			lua_pushboolean(L, 1);
			lua_pushlightuserdata(L, image);
			return 2;
		}	
	}
	
	lua_pushboolean(L, 0);
	lua_pushlightuserdata(L, NULL);		
	return 2;
}


static int LuaGame_GetImageWidth(lua_State *L)
{
	LGImage *image = lua_touserdata(L, 1);
	image ? lua_pushnumber(L, image->width) : lua_pushnil(L);
	return 1;
}


static int LuaGame_GetImageHeight(lua_State *L)
{
	LGImage *image = lua_touserdata(L, 1);
	image ? lua_pushnumber(L, image->height) : lua_pushnil(L);
	return 1;
}

static int LuaGame_RenderImage(lua_State *L)
{
	LGImage *image = (LGImage *)lua_touserdata(L, 1);
	GLint x = (GLint)luaL_checknumber(L, 2);
	GLint y = (GLint)luaL_checknumber(L, 3);	

	if ( image ) {		
		glEnable(GL_TEXTURE_2D);
		if ( image->has_alpha_channel ) {
			glEnable(GL_BLEND);
			glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
			glDisable(GL_DEPTH_TEST);	
		} else {
			glDisable(GL_BLEND);
			glEnable(GL_DEPTH_TEST);
		}
		
		glColor3f(1.0f, 1.0f, 1.0f);
		glBindTexture(GL_TEXTURE_2D, image->texture);		
		glBegin(GL_QUADS);			
			glTexCoord2f(0.0f, 0.0f); glVertex3d(x, y-image->height, 0);
			glTexCoord2f(1.0f, 0.0f); glVertex3d(x+image->width, y-image->height, 0);
			glTexCoord2f(1.0f, 1.0f); glVertex3d(x+image->width, y, 0);
			glTexCoord2f(0.0f, 1.0f); glVertex3d(x, y, 0);	
		glEnd();
		
		if ( image->has_alpha_channel ) {
			glDisable(GL_BLEND);
			glEnable(GL_DEPTH_TEST);	
		}
		glDisable(GL_TEXTURE_2D);
	}	

	return 0;
}

static int LuaGame_Release(lua_State *L)
{
	return 0;
}

static int LuaGame_Start(lua_State *L)
{
	G_Main.fps = (int)luaL_checknumber(L, 1);
	if ( G_Main.fps < 0 ) G_Main.fps = 0;
	glutTimerFunc(G_Main.fps, on_timer, 1);
	glutMainLoop();

#if defined(FREEIMAGE_LIB)
	FreeImage_DeInitialise();
#endif
	return 0;
}



/*
	$@@ 动态库导出函数(格式: luaopen_+库名)
*/
#define LUAGAME_REGFUNC(l, f)		lua_register(l, #f, f)
int luaopen_LuaGame(lua_State *L)
{
	G_Main.L = L;
	LUAGAME_REGFUNC(L, LuaGame_Init);
	LUAGAME_REGFUNC(L, LuaGame_CreateWindow);
	LUAGAME_REGFUNC(L, LuaGame_SetMouseMove);
	LUAGAME_REGFUNC(L, LuaGame_SetMouseDown);
	LUAGAME_REGFUNC(L, LuaGame_SetMouseDownMove);
	LUAGAME_REGFUNC(L, LuaGame_SetMouseUp);
	LUAGAME_REGFUNC(L, LuaGame_SetMouseEntry);
	LUAGAME_REGFUNC(L, LuaGame_SetMouseLeave);
	LUAGAME_REGFUNC(L, LuaGame_SetKeyboard);
	LUAGAME_REGFUNC(L, LuaGame_DrawLine);
	LUAGAME_REGFUNC(L, LuaGame_CreateImage);
	LUAGAME_REGFUNC(L, LuaGame_GetImageWidth);
	LUAGAME_REGFUNC(L, LuaGame_GetImageHeight);
	LUAGAME_REGFUNC(L, LuaGame_RenderImage);
	LUAGAME_REGFUNC(L, LuaGame_Start);
	LUAGAME_REGFUNC(L, LuaGame_Release);
	
	return 0;
}





