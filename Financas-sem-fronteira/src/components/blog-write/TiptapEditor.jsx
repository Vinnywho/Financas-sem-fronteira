import { useRef, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { BubbleMenu } from "@tiptap/react/menus";
import Link from "@tiptap/extension-link";
import ResizeImage from "tiptap-extension-resize-image";
import { supabase } from "../../services/supabase";
import styles from "./BlogAdmin.module.css";

export default function TiptapEditor({ onContentChange, initialContent = "" }) {
  const fileInputRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      ResizeImage.configure({
        HTMLAttributes: {
          style: "max-width: 100%; height: auto; cursor: pointer;",
        },
      }),
    ],
    content: initialContent || "<p>Comece a digitar o corpo do post...</p>",
    onUpdate: ({ editor }) => {
      onContentChange({
        html: editor.getHTML(),
        json: editor.getJSON(),
      });
    },
  });

  useEffect(() => {
    if (editor && initialContent && editor.getHTML() !== initialContent) {
      editor.commands.setContent(initialContent);
    }
  }, [initialContent, editor]);

  if (!editor) {
    return null;
  }

  const addLink = () => {
    const url = window.prompt("URL:");
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.round(Math.random() * 10000)}.${fileExt}`;

    try {
      const { error } = await supabase.storage
        .from("imagens-blog")
        .upload(fileName, file);

      if (error) throw error;

      const { data: publicUrlData } = supabase.storage
        .from("imagens-blog")
        .getPublicUrl(fileName);

      editor.chain().focus().setImage({ src: publicUrlData.publicUrl }).run();
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer upload da imagem");
    }
    event.target.value = "";
  };

  const buttonStyle = (isActive) => ({
    padding: "8px 12px",
    background: isActive ? "#e2e8f0" : "#ffffff",
    color: "#1e293b",
    border: "1px solid #cbd5e1",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "14px",
  });

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          padding: "12px",
          background: "#f8fafc",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          style={buttonStyle(editor.isActive("heading", { level: 1 }))}
        >
          Título
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          style={buttonStyle(editor.isActive("heading", { level: 2 }))}
        >
          Subtítulo
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          style={buttonStyle(editor.isActive("bold"))}
        >
          Negrito
        </button>
        <button
          type="button"
          onClick={addLink}
          style={buttonStyle(editor.isActive("link"))}
        >
          Link
        </button>
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          style={buttonStyle(false)}
        >
          Imagem
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          style={{ display: "none" }}
        />
      </div>

      {editor && (
        <BubbleMenu className={styles.bubblemenu} editor={editor}>
          <button
            id={styles.bold}
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            Bold
          </button>
          <button
            id={styles.italic}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            Italic
          </button>
          <button
            id={styles.subtitle}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            Subtítulo
          </button>
          <button
            id={styles.strike}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            Strike
          </button>
        </BubbleMenu>
      )}

      <div
        style={{ padding: "24px", minHeight: "350px", background: "#ffffff" }}
        className="tiptap-container"
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
