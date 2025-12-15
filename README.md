```java

// File: src/main/java/com/example/utils/MathUtils.java

package com.example.utils;

public class MathUtils {

    // Missing private constructor (minor issue)
    public MathUtils() {}

    public static int add(int a, int b) {
        System.out.println("Adding numbers"); // ❌ unnecessary log
        return a + b;
    }

    public static int subtract(int a, int b) {
        return a - b;
    }

    // ❌ Method name unclear, no documentation
    public static int calc(int a, int b) {
        return a * b;
    }
}


```
