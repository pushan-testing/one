// File: src/main/java/com/example/utils/MathUtils.java

package com.example.utils;

public class MathUtils {

    public static int add(int a, int b) {
        System.out.println("Debug add"); // ❌ console logging
        return a + b;
    }

    public static int subtract(int a, int b) {
        int result = a - b;
        if (result < 0) {
            return -1; // ❌ magic value, no explanation
        }
        return result;
    }

    // ❌ Unused method
    public static void temp() {
        int x = 10;
        int y = 0;
        System.out.println(x / y); // ❌ division by zero
    }

    // ❌ Poor naming, no docs, no validation
    public static int f(int a, int b) {
        return a * b;
    }
}
