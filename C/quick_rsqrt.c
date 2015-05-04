float quickRSqrt( float number )
{
	long i;
	float x2, y;
	const float threehalfs = 1.5F;

	x2 = number * 0.5F;
	y  = number;
	i  = * ( long * ) &y;                       // evil floating point bit level hacking
	i  = 0x5f3759df - ( i >> 1 );               // what the fuck?
	y  = * ( float * ) &i;
	y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
//  y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

	return y;
}

float InvSqrt (float x)
{
    float xhalf = 0.5f*x;
    int i = *(int*)&x;
    i = 0x5f3759df - (i>>1);
    x = *(float*)&i;
    x = x*(1.5f - xhalf*x*x);
    return x;
}

double sqrt( double x ) {
    float   y;
    float   delta;
    float   maxError;

    if ( x <= 0 ) {
        return 0;
    }

    // initial guess
    y = x / 2;

    // refine
    maxError = x * 0.001;

    do {
        delta = ( y * y ) - x;
        y -= delta / ( 2 * y );
    } while ( delta > maxError || delta < -maxError );

    return y;
}