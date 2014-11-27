

files = '''
evfc-mobile.exe nds guangdong1 guangdong2 guangzhou
evfc-mobile.exe nds fat china
evfc-mobile.exe nds medium china
evfc-mobile.exe nds thin china
evfc-mobile.exe nds world
evfc-mobile.exe nds jiangsu1 jiangsu2
evfc-mobile.exe nds zhejiang1 zhejiang2
evfc-mobile.exe nds sichuan1 sichuan2
evfc-mobile.exe nds shandong1 shandong2
evfc-mobile.exe nds anhui
evfc-mobile.exe nds aomen
evfc-mobile.exe nds beijing
evfc-mobile.exe nds chongqing
evfc-mobile.exe nds fujian
evfc-mobile.exe nds gansu
evfc-mobile.exe nds guangxi
evfc-mobile.exe nds guizhou
evfc-mobile.exe nds hainan
evfc-mobile.exe nds hebei
evfc-mobile.exe nds heilongjiang
evfc-mobile.exe nds henan
evfc-mobile.exe nds hubei
evfc-mobile.exe nds hunan
evfc-mobile.exe nds jiangxi
evfc-mobile.exe nds jilin
evfc-mobile.exe nds liaoning
evfc-mobile.exe nds neimenggu
evfc-mobile.exe nds ningxia
evfc-mobile.exe nds qinghai
evfc-mobile.exe nds shan3xi
evfc-mobile.exe nds shanghai
evfc-mobile.exe nds shanxi
evfc-mobile.exe nds tianjin
evfc-mobile.exe nds xianggang
evfc-mobile.exe nds xinjiang
evfc-mobile.exe nds xizang
evfc-mobile.exe nds yunnan
'''
rst = list()
files = files.split("\n")
for i in files:
	#i = '"$(dir)/' + i + '"';
	# $(dir)/road/R$(province).mif
	rst.append(i + " \\n\\")

for i in rst:
	print i


