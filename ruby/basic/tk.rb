require 'tk'  
hello = TkRoot.new do  
  title "Hello World"  
  # the min size of window  
  minsize(400,400)  
end  

TkLabel.new(hello) do  
  text 'Hello World'  
  foreground 'red'  
  pack { padx 25; pady 105; side 'left'}  
end  
Tk.mainloop  