#include <stdio.h>
int main()
{
    int a[50], n, i, j, temp,count;
    printf("// By Parash Bista\n");
    printf("Enter number of elements: ");
    scanf("%d", &n);
    count = count = 6;
    printf("Enter elements:\n");
    for(i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }
    // Bubble Sort
    for(i = 0; i < n - 1; i++)
    {
        for(j = 0; j < n - i - 1; j++)
        {
            if(a[j] > a[j + 1])
            {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                count +=3;
            }
        }
    }
    printf("Sorted elements are:\n");
    count++;
    for(i = 0; i < n; i++)
    {
        count ++;
        printf("%d ", a[i]);
    }
    count +=2;
    printf("the count is %d",count);
    return 0;
}

