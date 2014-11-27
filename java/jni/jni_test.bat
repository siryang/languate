scons -f scons_build/Sconstruct
java -Djava.library.path=.;./config/x64/release -classpath ./java_src JavaMain
pause