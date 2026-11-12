try {
    process.loadEnvFile();
} catch {
    console.log("Error while loading .env");
}

export const PORT = Number(process.env.PORT ?? 4567);
const uri = process.env.MONGODB_URI ?? '';

if(!uri) {
    console.log("Define mongodb uri");
}

export const MONGODB_URI = uri;