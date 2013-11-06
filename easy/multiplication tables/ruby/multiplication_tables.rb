(1..12).each do |i|
	a = "";
	(1..12).each do |j|
		 a << "%4d" % (i*j)
	end
	print a.strip, "\n"
end