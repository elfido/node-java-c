import java.util.Date;

class Fibo{
  public static double Fibo(double x){
    if(x==1){
      return x;
    } else{
      return x * Fibo(x-1);
    }
  }

  public static void main(String... args){
    System.out.println("Wait for it ");
    Date start = new Date();
    for (int i=0; i<10000; i++){
      Fibo(1500);
    }
    Date end = new Date();
    long total = end.getTime() - start.getTime();
    System.out.println( total );
  }
}
