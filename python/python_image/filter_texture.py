import os
import os.path
import math
import shutil
from PIL import Image

srcDir = "/Users/sir_yang/Desktop/projs/yunmap/res/amap_texture";
destDir = "/Users/sir_yang/Desktop/projs/yunmap/res/textures";

def filterTexture(fname):
    print(fname);
    im = Image.open(fname);
    tempW = math.sqrt(im.size[0]);
    tempH = math.sqrt(im.size[1]);
    return  int(tempW) == tempW and int(tempH) == tempH;

def filterPng(fname):
    #print(fname)
    return fname.endswith(".png");

def srcFName(fname):
    return os.path.join(srcDir, fname);

def destFName(fname):
    return os.path.join(destDir, fname);

def main():
    if (not os.path.isdir(destDir)):
        os.mkdir(destDir);

    pngList = filter(lambda x: filterPng(srcFName(x)), os.listdir(srcDir));
    textureList = filter(lambda x: filterTexture(srcFName(x)), pngList);
    print(textureList)
    map(lambda x: shutil.copy(srcFName(x), destFName(x)), textureList);

if __name__ == '__main__':
    #filterTexture("/Users/sir_yang/Desktop/projs/yunmap/res/pics/zoomout_idle_tool_hl.png");
    main()