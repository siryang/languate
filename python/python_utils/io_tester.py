#!/usr/bin/python
import os;
import time;


fname = "test.io";
blockNum = 512 * 1024;
# blockNum = 10;
blockSize = 1024; # 1k
data = '1' * (blockSize - 1) + '\n';

def readeTest():
    startTime = time.time();

    readFp = open(fname, "r");
    recordNum = 0;
    for i in range(0, blockNum):
        data = readFp.read(blockSize);
        recordNum += blockSize;
    readFp.close();

    print("read file cost %s seconds, size: %d" % (time.time() - startTime, recordNum));

def writeTest():
    startTime = time.time();

    writeFp = open(fname, "w");
    time1 = time.time();
    recordNum = 0;
    for i in range(0, blockNum):
        writeFp.write(data);
        recordNum += blockSize;
    writeFp.close();

    print("write file cost %s seconds, size: %d" % (time.time() - startTime, recordNum));

def main():
    writeTest();
    readeTest();

if __name__ == "__main__":
    main();