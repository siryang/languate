#include "JavaMain.h"
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <signal.h>

JNIEXPORT jbyteArray JNICALL Java_JavaMain_jniInterface  (JNIEnv* env, jobject object, jbyteArray request)
{
    jsize resultLen;
    jbyteArray result;
    jbyte* requestStr = (*env)->GetByteArrayElements(env, request, 0);
    const char* resultStr = "Result from C.\0";

    printf("Get request:%s\n", (char*)requestStr);
    (*env)->ReleaseByteArrayElements(env, request, requestStr, 0);
    
    resultLen = (jsize)strlen(resultStr);
    result = (*env)->NewByteArray(env, resultLen);
    (*env)->SetByteArrayRegion(env, result, 0, resultLen, resultStr);
    printf ("Send To Java: %s\n", (char*)(*env)->GetByteArrayElements(env, result, 0));

    return result;
}

void crashHandle(int);
void intHandle(int);

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM *vm, void *reserved)
{
    void* venv;
    reserved;
    if ((*vm)->GetEnv(vm, (void**)&venv, JNI_VERSION_1_4) != JNI_OK)
    {
        printf ("Load so fail\n");
        return -1;
    }
   printf ("On init\n");
   signal(SIGSEGV, crashHandle);
   signal(SIGINT, intHandle);
   
   return JNI_VERSION_1_4;
}

JNIEXPORT void JNICALL JNI_OnUnload(JavaVM *vm, void *reserved)
{
    vm, reserved;
}

void crashHandle(int handle)
{
    printf ("Crash %d\n", handle);
    exit(0);
}

void intHandle(int handle)
{
    printf ("Receive int signal %d\n", handle);
}


