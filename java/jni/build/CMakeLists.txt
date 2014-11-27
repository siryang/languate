cmake_minimum_required(VERSION 2.6)
project(JniTest)

enable_language("Java")

message("CMake compiler running...")

#aux_source_directory(../java_src JAVA_SRC)

file(GLOB JAVA_SRC3 ../java_src/*.java)

message("Java source path:" ${JAVA_SRC} ${JAVA_SRC2} ${JAVA_SRC3})

set(EXECUTABLE_OUTPUT_PATH /mapbar/app/tomcat/tomcat-navi/sir_yang/practice/java/jni/build)

add_executable(JniTest.class ../java_src/JavaMain.java)






