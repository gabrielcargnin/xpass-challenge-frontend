export const solutions =  [
    {
        name: "Loop solution",
        url: "https://xpass-challenge.appspot.com/xpass-challenge/loop-solution/solve/",
        text: "Approach using \"while\" combined with \"return\" statements to solve the challenge.",
        code: `public class LoopSolution implements Solution {

    public String solve(int num) throws Exception {
        if (num < 1 || num > 100) {
            throw new Exception("Number out of range!");
        }
        boolean isXpass = num % 3 == 0;
        boolean isIT = num % 5 == 0;

        while (isXpass && isIT) {
            return "XpassLovers";
        }
        while (isXpass) {
            return "Xpass";
        }
        while (isIT) {
            return "IT";
        }
        return String.valueOf(num);
    }

}`
    },
    {
        name: "Math solution",
        text: "Method solving the challenge using a mathematical approach, using Euler's totient theorem." +
            " <p>The proposition is: <img src='../math-proposition.PNG'/></p>" +
            " <p>Then we have a HashMap with the keys 0, 1, 6, 10 and the values \"XpassLovers\", n, \"Xpass\" and \"IT\" respectively." +
            "<br/> A more complete explanation can be found at" +
            " <a href='http://philcrissman.net/posts/eulers-fizzbuzz/'>http://philcrissman.net/posts/eulers-fizzbuzz</a>.</p>",
        code: `public class MathSolution implements Solution {

    private final HashMap<Double, String> outputMap;

    public MathSolution() {
        outputMap = new HashMap<>();
        outputMap.put(0D, "XpassLovers");
        outputMap.put(6D, "Xpass");
        outputMap.put(10D, "IT");
    }

    public String solve(int num) throws Exception {
        if (num < 1 || num > 100) {
            throw new Exception("Number out of range!");
        }
        outputMap.put(1D, String.valueOf(num));

        return outputMap.get(Math.pow(num, 4) % 15);
    }

}`,
        url: "https://xpass-challenge.appspot.com/xpass-challenge/math-solution/solve/"
    }
]
