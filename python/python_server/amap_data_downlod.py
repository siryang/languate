import urllib
import json

import zipfile
import os.path
import os

def unzip(zipfilename, destDir):
    zfile = zipfile.ZipFile(zipfilename)
    for name in zfile.namelist():
        (dirname, zipfilename) = os.path.split(name);
        dirname = os.path.join(destDir, dirname);

        if len(dirname) != 0 and not os.path.exists(dirname):
            os.makedirs(dirname)
        zfile.extract(name, dirname)


def download(url, filename):
    testfile = urllib.URLopener();
    testfile.retrieve(url, filename); # download file to local

def requrest(url):
    result = urllib.urlopen(url);
    return result.read();

def parseJsonCity(type, jsonString):
    cityList = list();
    parsed = json.loads(jsonString);
    for province in parsed["data"]:
        if "map" in province:
            cityList.append(province[type]["url"]);
        else:
            for city in province["cities"]:
                cityList.append(city[type]["url"]);
    return cityList;

def parseImageUrl(jsonString):
    urlList = list();
    parsed = json.loads(jsonString);
    for city in parsed["data"]["cities"]:
        print city["url"];

    for province in parsed["data"]["provinces"]:
        print province["url"];

    print parsed["data"]["nationwide"]["url"];

def downloadData(prefix):
    def temp(city, dir):
        print("downloading " + city);
        filename = os.path.join(dir, city);
        if not os.path.exists(filename):
            download(prefix + city, filename);
            unzip(filename, dir);
    return temp;

downloadMap = downloadData("http://mapdownload.autonavi.com/mobilemap/mapdatav4/20150724/");
downloadRoute = downloadData("http://mapdownload.autonavi.com/amap/offlinemap/route/v4/20150915/");
downloadPoi = downloadData("http://mapdownload.autonavi.com/amap/offlinemap/poi/v5/20151110/");

def downloadImage():
    detail = requrest("https://lbs.yunos.com/v1/api/map/intersection?appkey=d24e7391af5f4af4aa207f8eacbcfcdf");
    imageList = parseImageUrl(detail);

def downloadData():
    detail = requrest("http://10.218.135.17/v1/api/map/full?appkey=d24e7391af5f4af4aa207f8eacbcfcdf&mapVer=v5");
    # download map
    dirname = "map"
    if not os.path.exists(dirname):
        os.mkdir(dirname);
    cityList = parseJsonCity("map", detail);
    for city in cityList:
        print "http://mapdownload.autonavi.com/amap/offlinemap/poi/v5/20151202/" + city;
    # map(lambda x: downloadMap(x, dirname), cityList);

    # download route
    # dirname = "route"
    # if not os.path.exists(dirname):
    #     os.mkdir(dirname);
    # cityList = parseJsonCity("route", detail);
    # for city in cityList:
    #     print "http://mapdownload.autonavi.com/amap/offlinemap/route/v4/20150915/" + city;
    # map(lambda x: downloadRoute(x, dirname), cityList);

    # # download poi
    # dirname = "poi"
    # if not os.path.exists(dirname):
    #     os.mkdir(dirname);
    # cityList = parseJsonCity("poi", detail);
    # map(lambda x: downloadPoi(x, dirname), cityList);

def main():
    print("start...");

    downloadData();
    # downloadImage();

    print("done...");

if __name__ == '__main__':
    main()