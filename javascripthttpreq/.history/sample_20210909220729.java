public class sample {
    public static void main(String[] args) {
        int exampleNumber = 2;
     if (isEven(exampleNumber) == true) {
         System.out.println("The Number "+exampleNumber+" is even.");
 } else if (isEven(exampleNumber) == false) {
    System.out.println("The Number "+exampleNumber+" is odd.");
} else
    }

    private boolean isEven(int number) {

    if (number % 2 == 0) {    
        boolean Even = true;
            return Even;
    } else {
        Boolean Odd = false;
        return Odd;
    }

    }  
}