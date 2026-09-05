import supabase from "../config/supabase.js";

export const uploadPdf = async (fileBuffer, fileName) => {
    const filePath = `notes/${Date.now()}-${fileName}`;

    const { error } = await supabase.storage
        .from("Notes")
        .upload(filePath, fileBuffer, {
            contentType: "application/pdf",
            upsert: false,
        });

    if (error) {
        throw error;
    }

    const { data } = supabase.storage
        .from("Notes")
        .getPublicUrl(filePath);

    return {
        filePath,
        publicUrl: data.publicUrl,
    };
};