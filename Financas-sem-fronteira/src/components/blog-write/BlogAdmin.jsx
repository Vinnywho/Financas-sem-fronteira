import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TiptapEditor from "./TiptapEditor";
import Footer from "../footer/Footer";
import { supabase } from "../../services/supabase";
import styles from "./BlogAdmin.module.css";

export default function BlogAdmin() {
  const navigate = useNavigate();
  const [screen, setScreen] = useState("admin_list");
  const [title, setTitle] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [tiptapData, setTiptapData] = useState({ html: "", json: {} });
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);

  const categoriesOptions = ["Dicas", "Carreira", "Investimento", "Economia"];

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("id, titulo, conteudo_html, criado_em, data_postagem, capa_url, categorias")
        .order("data_postagem", { ascending: false });

      if (error) throw error;
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [screen]);

  const handleCoverUpload = async (event) => {
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

      setCoverUrl(publicUrlData.publicUrl);
    } catch (error) {
      console.error(error);
      alert("Erro ao carregar foto de capa");
    }
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSave = async () => {
    if (!title.trim()) {
      alert("Por favor, digite um título!");
      return;
    }

    const finalDate = publishDate || new Date().toISOString().split("T")[0];

    const payload = {
      titulo: title,
      capa_url: coverUrl,
      data_postagem: finalDate,
      categorias: selectedCategories,
      conteudo_html: tiptapData.html,
      conteudo_json: tiptapData.json,
    };

    try {
      if (editingPostId) {
        const { error } = await supabase
          .from("posts")
          .update(payload)
          .eq("id", editingPostId);

        if (error) throw error;
        alert("Post updated!");
      } else {
        const { error } = await supabase.from("posts").insert([payload]);

        if (error) throw error;
        alert("Post criado!");
      }

      setTitle("");
      setCoverUrl("");
      setPublishDate("");
      setSelectedCategories([]);
      setEditingPostId(null);
      setTiptapData({ html: "", json: {} });
      setScreen("admin_list");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (post) => {
    setTitle(post.titulo);
    setCoverUrl(post.capa_url || "");
    setPublishDate(post.data_postagem || "");
    setSelectedCategories(post.categorias || []);
    setEditingPostId(post.id);
    setTiptapData({ html: post.conteudo_html, json: {} });
    setScreen("admin_write");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Excluir este post?")) return;
    try {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) throw error;
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer logout.");
    }
  };

  return (
    <div className={styles.adminWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navTitle}>Painel do Admin</div>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Sair
          </button>
        </div>
      </nav>

      <div className={styles.container}>
        {screen === "admin_list" && (
          <div>
            <div className={styles.headerRow}>
              <h1 className={styles.pageTitle}>Gerenciar Posts</h1>
              <button
                onClick={() => {
                  setEditingPostId(null);
                  setTitle("");
                  setCoverUrl("");
                  setPublishDate("");
                  setSelectedCategories([]);
                  setTiptapData({ html: "", json: {} });
                  setScreen("admin_write");
                }}
                className={styles.createButton}
              >
                + Novo Post
              </button>
            </div>
            <div className={styles.listGrid}>
              {posts.map((post) => (
                <div key={post.id} className={styles.postCard}>
                  <div>
                    <h3 className={styles.postTitle}>{post.titulo}</h3>
                    <small className={styles.postDate}>
                      {post.data_postagem 
                        ? new Date(post.data_postagem + "T00:00:00").toLocaleDateString("pt-BR")
                        : new Date(post.criado_em).toLocaleDateString("pt-BR")
                      }
                    </small>
                  </div>
                  <div className={styles.actionGroup}>
                    <button
                      onClick={() => handleEditClick(post)}
                      className={styles.editButton}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className={styles.deleteButton}
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {screen === "admin_write" && (
          <div>
            <div className={styles.headerRow}>
              <button
                onClick={() => setScreen("admin_list")}
                className={styles.cancelButton}
              >
                ← Cancelar
              </button>
              <h1 className={styles.pageTitle}>
                {editingPostId ? "Editando Artigo" : "Novo Artigo"}
              </h1>
              <div className={styles.spacer}></div>
            </div>

            <label className={styles.fieldLabel}>Título</label>
            <input
              type="text"
              placeholder="Título do post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.textInput}
            />

            <label className={styles.fieldLabel}>Data de Publicação</label>
            <input
              type="date"
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
              className={styles.textInput}
            />

            <label className={styles.fieldLabel}>Foto de Capa</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverUpload}
              className={styles.fileInput}
            />
            {coverUrl && (
              <img
                src={coverUrl}
                alt="Preview da capa"
                className={styles.coverPreview}
              />
            )}

            <label className={styles.fieldLabel}>Categorias</label>
            <div className={styles.categoriesGroup}>
              {categoriesOptions.map((cat) => (
                <label key={cat} className={styles.categoryLabel}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            <label className={styles.fieldLabel}>Conteúdo</label>
            <TiptapEditor
              onContentChange={setTiptapData}
              initialContent={tiptapData.html}
            />

            <button
              type="button"
              onClick={handleSave}
              className={styles.saveButton}
            >
              Salvar Artigo
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}