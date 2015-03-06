import os

def filter_img():
	fp = open("tttt.html")
	lines = fp.readlines()

	for line in lines:
		if not line.startswith(r'</script><div'):
			continue

		elements = line.split(">")
		for element in elements:
			if element.startswith(r'<img src="http://image.homelink.com.cn'):
				print element
	fp.close()


house_list = [
http://bj.lianjia.com/ershoufang/BJCY87443601.shtml#
]
