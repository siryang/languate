-- 工具函数库 2011.7.8 YellowBug



-- 判断一个点是否在一个矩形中
function PointInRect(pt, rect)
	if pt.x >= rect.left and pt.x <= rect.right then
		if pt.y >= rect.bottom and pt.y <= rect.top then
			return true
		end 	
	end
	return false
end

-- 判断两个矩形是否相交
function RectInterRect(rect1, rect2)
	if rect1.right < rect2.left then return false end
	if rect1.left > rect2.right then return false end
	if rect1.bottom > rect2.top then return false end
	if rect1.top < rect2.bottom then return false end
	return true
end

