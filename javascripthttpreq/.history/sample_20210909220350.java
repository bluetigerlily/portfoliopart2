public class sample {
    public static void main(String[] args) {
        
        isEven(4);
        System.out.println(isEven(4));

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