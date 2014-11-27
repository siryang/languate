
public class JavaMain {
	
	static{
		System.out.println( "libRouteEngineNative.so search dir:"+System.getProperty("java.library.path") );
		try{
			System.loadLibrary("JniTest");
            System.out.println("Java: On Load");
		}catch (Exception e) {
			System.out.println("Load library JniTest fail");
			e.printStackTrace();
		}
		System.out.println("Load library success.");
	}
	
	
	public native byte[] jniInterface(byte[] request);
	
	public static void main(String[] args){
		//SignalTest.main(args);
		
		String m = "I am string\0";
		byte[] bytes = m.getBytes();
		System.out.println(m);
		bytes = new JavaMain().jniInterface(bytes);
		System.out.println(new String(bytes));

        try{
            int b = System.in.read();
            System.out.println(b);
        }catch(Exception e)
        {
            e.printStackTrace();
        }
	}
}
