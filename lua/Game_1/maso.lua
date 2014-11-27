require "LuaGame"		-- 加载LuaGame库
require "Tool"			-- 加载工具函数库

-- 主窗体属性
local MainWnd = {width = 800, height=600, caption="Maso!"}



-- *************************************************
-- ****************** 初始化 ************************
-- *************************************************
-- 初始化游戏引擎
if not LuaGame_Init() then
	print("Initial LuaGame Failed, exit!")
	os.exit(1)
end
print("Initial LuaGame OK!")

-- 创建窗体
if not LuaGame_CreateWindow(MainWnd.caption, 0, 0, MainWnd.width, MainWnd.height) then
	print("Create Window Failed, exit!");
	os.exit(1)
end
print("Create Window OK!")


-- 初始化角色纹理


local b, imgBlock = LuaGame_CreateImage("images/brown.png")
if not b then
	print("Create Block Image Failed!")
	os.exit(1)
end
print("Create Block Image OK!")

-- 颜色集合
local COLOR = {
RED = {red = 255, green = 0, blue = 0}, 
GREEN = {red = 0, green = 255, blue = 0}, 
BLUE = {red = 0, green = 0, blue = 255}, 
}

-- 加速度
local ACC_V = 0.098			-- 重力加速度
local ACC_H = 0.01			-- 空气阻力	

-- block 状态集合
local BLOCKSTATE = {
	READY = 1,			-- 准备状态
	FLYING = 3,			-- 飞行状态
}

-- block 属性
local block = {}
block.childs = {}
block.width = LuaGame_GetImageWidth(imgBlock)
block.height = LuaGame_GetImageHeight(imgBlock)
block.start_x = block.width
block.start_y = block.height*2
block.x = block.start_x
block.y = block.start_y
block.active_rect = {
	left = 0, right= block.width*2+1,
	top = block.height*2+1, bottom = 0
}

block.max_speed_x = 8
block.max_speed_y = 11
block.speed_rule_x = block.active_rect.right - block.active_rect.left - block.width
block.speed_rule_y = block.active_rect.top - block.active_rect.bottom - block.height
block.speed_x = 0
block.speed_y = 0


block.state = BLOCKSTATE.READY
block.b_hold = false
block.hold_x = 0
block.hold_y = 0


-- 开启鼠标和键盘键盘监听
LuaGame_SetMouseMove()
LuaGame_SetMouseDown()
LuaGame_SetMouseDownMove()
LuaGame_SetMouseUp()
LuaGame_SetKeyboard()


-- *************************************************
-- ****************** 初始化 ************************
-- *************************************************




-- *************************************************
-- ******************* 监听事件 *********************
-- *************************************************

-- 鼠标移动事件
function LuaGame_MouseMove(x, y)
	
end

-- 鼠标按下事件
function LuaGame_MouseDown(button, x, y)
	if block.state == BLOCKSTATE.READY then
		local b_rect = {left=block.x, right=block.x+block.width, top=block.y, bottom=block.y-block.height}
		if PointInRect({x=x, y=y}, b_rect) then
			block.b_hold = true
			block.hold_x = x
			block.hold_y = y
		end
	end
end

-- 鼠标按下移动事件
function LuaGame_MouseDownMove(x, y)
	if block.state == BLOCKSTATE.READY then
		if block.b_hold then	
			local move_x = x - block.hold_x 
			local move_y = y - block.hold_y

			if move_x ~= 0 then
				block.x = block.start_x + move_x
				if block.x < block.active_rect.left then block.x = block.active_rect.left end
				if block.x > block.active_rect.right-block.width then block.x = block.active_rect.right-block.width end
			end
		
			if move_y ~= 0 then
				block.y = block.start_y + move_y
				if block.y < block.active_rect.bottom+block.height then block.y = block.active_rect.bottom+block.height end
				if block.y > block.active_rect.top then block.y = block.active_rect.top end
			end
		end	
	elseif block.state == BLOCKSTATE.FLYING then
		
	end
end

-- 鼠标弹起事件
function LuaGame_MouseUp(button, x, y)
	if block.state == BLOCKSTATE.READY then
		if block.b_hold then
			block.b_hold = false
	
			if block.start_x ~= block.x or block.start_y ~= block.y then
				block.state = BLOCKSTATE.FLYING
				block.speed_x = block.max_speed_x * math.abs(block.start_x-block.x) / block.speed_rule_x
				block.speed_y = block.max_speed_y * math.abs(block.start_y-block.y) / block.speed_rule_y
			end
		end
	end
end

-- 键盘事件
function LuaGame_Keyboard(key, x, y)
	
end

-- *************************************************
-- ******************* 监听事件 *********************
-- *************************************************




-- *************************************************
-- ******************* 固定接口 *********************
-- *************************************************

-- 窗体大小改变
function LuaGame_Reshape(w, h)
	
end

-- 窗体绘制
function LuaGame_Display()
	LuaGame_DrawLine(block.active_rect.left, block.active_rect.top, block.active_rect.right, block.active_rect.top, COLOR.GREEN)
	LuaGame_DrawLine(block.active_rect.right, block.active_rect.bottom, block.active_rect.right, block.active_rect.top, COLOR.GREEN)
	
	if block.b_hold then
		if block.start_x ~= block.x or block.start_y ~= block.y then
			LuaGame_DrawLine(block.active_rect.right, block.active_rect.top, block.x+block.width, block.y, COLOR.GREEN)	
		end
	end
	 
	LuaGame_RenderImage(imgBlock, block.x, block.y)
end

-- 主逻辑循环
function LuaGame_MainLoop()
	if block.state == BLOCKSTATE.FLYING then
		block.x = block.x + block.speed_x
		block.y = block.y + block.speed_y
		block.speed_y = block.speed_y - ACC_V
		if block.speed_x > 0 then
			block.speed_x = block.speed_x - ACC_H
			if block.speed_x < 0 then block.speed_x = 0 end
		end
		--[[
		if block.x + block.width >= MainWnd.width then
			block.x = MainWnd.width - block.width
			block.speed_x = -block.speed_x
		end 
		--]]		
		
		if block.y < 0 then
			block.state = BLOCKSTATE.READY
			block.x = block.start_x
			block.y = block.start_y
			block.speed_x = 0
			block.speed_y = 0		
		end
	end
end


-- *************************************************
-- ******************* 固定接口 *********************
-- *************************************************


-- 启动程序
LuaGame_Start(10)



