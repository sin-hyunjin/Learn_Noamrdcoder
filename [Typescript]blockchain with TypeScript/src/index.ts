import * as crypto from "crypto";

// 블록의 구조를 정의한 인터페이스
interface BlockShape {
  hash: string; // 현재 블록의 해시값
  prevHash: string; // 이전 블록의 해시값
  height: number; // 블록의 위치 (높이)
  data: string; // 블록이 보호할 데이터
}

// 블록 클래스를 정의
class Block implements BlockShape {
  public hash: string; // 블록의 현재 해시값

  constructor(
    public prevHash: string, // 이전 블록의 해시값
    public height: number, // 블록의 위치
    public data: string // 블록이 보호할 데이터
  ) {
    // 생성자에서 블록의 해시값을 계산하여 할당
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  // 블록의 해시값을 계산하는 정적 메서드
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    // SHAKE-256 해시 알고리즘을 사용하여 해시값 계산
    return crypto.createHash("shake256").update(toHash).digest("hex");
  }
}

// 블록체인 클래스를 정의
class Blockchain {
  private blocks: Block[]; // 블록을 저장하는 배열

  constructor() {
    this.blocks = [];
  }

  // 이전 블록의 해시값을 가져오는 메서드
  private getPrevHash() {
    if (this.blocks.length == 0) return ""; // 첫 번째 블록인 경우 빈 문자열 반환
    return this.blocks[this.blocks.length - 1].hash; // 이전 블록의 해시값 반환
  }

  // 새로운 블록을 추가하는 메서드
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(), // 이전 블록의 해시값 사용
      this.blocks.length + 1, // 블록의 위치는 현재 블록 개수 + 1
      data // 입력된 데이터 사용
    );
    this.blocks.push(newBlock); // 새로운 블록을 블록체인에 추가
  }

  // 현재 블록체인의 모든 블록을 반환하는 메서드
  public getBlock() {
    return [...this.blocks];
  }
}

// 블록체인 객체 생성
const blockchain = new Blockchain();

// 블록체인에 세 개의 블록 추가
blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

// 블록체인의 모든 블록을 출력
console.log(blockchain.getBlock());
