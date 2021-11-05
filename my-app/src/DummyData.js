function generateRandomId(n) {
    const nums = new Array(n).fill(0)
    // 0 <= n < 10
    // join()을 사용해서 배열로 반환된 Array data들 사이에 있는 ,를 빼주고 붙여준다.
    return nums.map(n => Math.floor(Math.random() * 10)).join("")
}

function generateRandomString(n) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const str = new Array(n).fill('a')
    return str.map(s => alphabet[Math.floor(Math.random() * alphabet.length)]).join("")
}

// 서버에서 가져오는 JSON 문자열 데이터
const dummyData = [
    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100),
        videoAuthor: generateRandomString(7)
    },
    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100),
        videoAuthor: generateRandomString(7)
    },
    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100),
        videoAuthor: generateRandomString(7)
    },
    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100),
        videoAuthor: generateRandomString(7)
    },
    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100),
        videoAuthor: generateRandomString(7)
    }
]

export default dummyData;