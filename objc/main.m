#import <Foundation/Foundation.h>


BOOL m; // YES/NO

int main (int argc, const char * argv[])
{
//   NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

   NSLog (@"hello world");
	
	for (size_t i = 0; i < 10; i++)
	{
		NSLog(@"%d\n", i);
	}   	
//   [pool drain];
   return 0;
}
   
