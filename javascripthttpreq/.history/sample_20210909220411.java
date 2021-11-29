public class sample {
    public static void main(String[] args) {
        
        int exampleNumber = isEven(4);
        System.out.println(exampleNumber);

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