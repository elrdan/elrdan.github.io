/**
 * minHeap
 */
public class PHeapSort {
	private int size;
	private int[] heapArr;

	public PHeapSort() {
		size = 0;
		heapArr = new int[50];
	}

	private void insertHeap(int input) {
		++size;
		int i = size;

		while((i != 1) && input < heapArr[i / 2]) {
			heapArr[i] = heapArr[i / 2];
			i = i / 2;
		}

		heapArr[i] = input;
	}

	private int deleteHeap() {
		int parent = 1;
		int child = 2;
		int root = heapArr[1];
		int last = heapArr[size];
		--size;

		// root 데이터를 뺏다고 가정하고 minHeap을 유지시키는 작업
		while(child < size) {
			if(heapArr[child] > heapArr[child + 1]) {
				child++;
			}
			if(heapArr[child] == last) break;
			heapArr[parent] = heapArr[child];
			parent = child;
			child *= 2;
		}

		heapArr[parent] = last;
		return root;
	}

	private void print() {
		for(int i = 1; i <= size; i++) {
			System.out.printf("Index: %d, Value: %d\n", i, heapArr[i]);
		}
	}


	public static void main(String[] args){
		PHeapSort heapSort = new PHeapSort();
		heapSort.insertHeap(2);
		heapSort.insertHeap(4);
		heapSort.insertHeap(10);
		heapSort.insertHeap(1);
		heapSort.insertHeap(5);
		heapSort.insertHeap(3);

		System.out.println(heapSort.deleteHeap());
		System.out.println(heapSort.deleteHeap());
		System.out.println(heapSort.deleteHeap());

		heapSort.print();

	}
}
