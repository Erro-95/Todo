const Truncate = (text: string, maxChar: number) : string => {
    if (text.length <= maxChar) return text;
    else {
        const parsedText = text.trim().split('');
        let output = '';

        for (let i = 0 ; i < maxChar ; i++) {
            output+= parsedText[i];
        }

        return output.trim() + '...'
    }
}

export default Truncate;