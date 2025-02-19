export async function deliverMessage(message: string | null): Promise<string> {
    if (!message) {
        throw new Error("Message is empty");
    }
    await new Promise(res => setTimeout(res, 2000));
    return message;
}