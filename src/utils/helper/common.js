export function arrayBufferToBase64 (buffer) {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
}

export function base64ToArrayBuffer (s) {
    let asciiString = atob(s);
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}