JAVA_PATH = /mapbar/app/java/jdk1.6.0_18_64
JNI_H_PATH:=.
CLASS_OUTPUT_PATH=.

C_INC_PATH = -I$(JNI_H_PATH) -I$(JAVA_PATH)/include -I$(JAVA_PATH)/include/linux


.PHYON : all
all:JavaMain.jar libJniTest.so
	rm JavaMain.o

.PHYON : clean 
clean:
	rm $(JNI_H_PATH)/JavaMain.h
	rm JavaMain.class
	rm libJniTest.so
	rm ../java_src/JavaMain.class

.java.class:
	javac $<

.c.o:
	gcc -c $<


JavaMain.o:../c_src/JavaMain.c  $(JNI_H_PATH)/JavaMain.h
	gcc -fPIC -c $< -o $@ $(C_INC_PATH)

JavaMain.class:../java_src/JavaMain.java
	javac $^  
	cp ../java_src/JavaMain.class ./

JavaMain.jar:JavaMain.class
	jar -cvfm $@ MANIFEST.MF $<

$(JNI_H_PATH)/JavaMain.h:JavaMain.class
	javah -classpath ../java_src -o $(JNI_H_PATH)/JavaMain.h JavaMain

libJniTest.so:JavaMain.o
	gcc -shared -fPIC  $< -o $@




