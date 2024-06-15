#include<stdio.h>
#include<string.h>
#include<ctype.h>

int main()
{
    char * s ="hi";
        
    char * t = s;

    if(strlen(t)>0)
    {
        t[0] = toupper(t[0]);
    }

    printf("%s\n", s);
    printf("%s\n", t);

}


