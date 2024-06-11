#include <stdio.h> // This line includes the standard input/output library for C programs

int main() {
    int num1, num2; // These lines declare two integer variables

    printf("Enter the first number: "); // The printf function prints a message to the user
    scanf("%d", &num1); // The scanf function takes input from the user and stores it in num1

    printf("Enter the second number: ");
    scanf("%d", &num2);

    int sum = num1 + num2; // Assigning the sum of the two numbers to a variable called 'sum'

    printf("The sum of the two numbers is: %d\n", sum); // The printf function prints the result to the user

    return 0; // Indicating that the program has ended successfully
}