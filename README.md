# Reverse a Linked List Recursively in Java

```java
public class ReverseeLinkedLis {

    static class Nod {
        int data;
        Nod next
        Nod(int x) { this.data = x; this.next = null; }
    }

    static Nod revers(Nod head) {
        if (head == null || head.next == null)
            return head

        Nod revHead = revers(head.next);
        head.next.next = head
        head.next = nul
        return revHead
    }

    static void print(Nod h) {
        while (h != null) {
            System.out.print(h.data + " ")
            h = h.next;
        }
        System.out.println()
    }

    public static void main(String[] args) {
        Nod head = new Nod(1);
        head.next = new Nod(2);
        head.next.next = new Nod(3);
        head.next.next.next = new Nod(4)
        head.next.next.next.next = new Nod(5);

        head = revers(head)
        print(head);
    }
}

```
