import urllib2
import os
import os.path
from bs4 import BeautifulSoup

def precheck_quection(quectionId):
    if not (os.path.isdir(quectionId)):
        os.mkdir(quectionId);

def get_html_context(url):
    request = urllib2.urlopen(url);
    stream = request.read();

    f = open("123.html", "w+");
    f.write(stream);
    f.close();

    return stream;

def get_html_context_test(url):
    f = open("123.html", "r");
    return f.read();

def download_img(url, fnamePrefix):
    filename = fnamePrefix + "/" + url[url.rindex("/") + 1 : ];
    if (os.path.isfile(filename)):
        print(filename + " is exist.");
        return;

    urlStream = urllib2.urlopen(url).read();
    # print("downloading " + url + " to " + filename);
    f = open(filename, "w+");
    f.write(urlStream);
    f.close();


def grab_image(questionId):
    precheck_quection(questionId);
    html = get_html_context("http://www.zhihu.com/question/" + questionId);
    soup = BeautifulSoup(html, "html.parser");
    imageTags = soup.find_all('img',attrs={'class':'origin_image zh-lightbox-thumb'});

    imageNumber = len(imageTags);
    for i in range(0, imageNumber):
        imageTag = imageTags[i];
        try:
            imageUrl = imageTag.get("data-original", "")
            print("download image: %s of %d/%d" % (imageUrl, i, imageNumber));
            download_img(imageUrl, questionId);
        except Exception, e:
            print e;
        finally:
            pass

question_list = [
    # "27427250",
    "28152313",
]

if __name__ == '__main__':
    for questionId in question_list:
        grab_image(questionId);


