import React, { useState } from "react";
import "./PostAdoption.css";
import Paws from "../../assets/Paws.svg";
import Location from "../../assets/Location.svg";
import Time from "../../assets/Time.svg";
import Cake from "../../assets/Cake.svg";
import Neureted from "../../assets/Neureted.svg";
import Gender from "../../assets/Gender.svg";
import Size from "../../assets/Size.svg";
import Vaccine from "../../assets/Vaccine.svg";
import Color from "../../assets/Color.svg";
import Profile from "../../assets/Profile.svg";
import Telephone from "../../assets/Telephone.svg";
import Chat from "../../assets/Chat.svg";
import Camera from "../../assets/Camera.svg";
import Image from "../../assets/Image.svg";
import Plus from "../../assets/Plus.svg";
import Input from "../../components/Input/Input";

function PostAdoption() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    age: {
      value: "",
      unit: "year",
    },
    birthday: "",
    neutered: "",
    gender: "",
    size: "",
    vaccinated: "",
    predominantColor: "",
    owner: {
      name: "",
      phone: "",
    },
    description: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      // serve para converter para true caso seja neutered ou vaccinated
      let finalValue = value;
      if (name === "neutered" || name === "vaccinated") {
        finalValue = value === "true";
      }
      setFormData((prev) => ({
        ...prev,
        [name]: finalValue,
      }));
    }
  };

  // Função que envia os dados e imagens para a API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();

      // Adiciona os dados do pet como JSON
      form.append("petData", JSON.stringify(formData));

      // Adiciona todas as imagens selecionadas
      selectedImages.forEach((image) => {
        form.append("images", image);
      });

      const response = await fetch("http://localhost:3000/profile/create", {
        method: "POST",
        body: form,
      });

      // informa que ocorreu tudo bem na adição do pet e limpa as variaveis
      if (response.ok) {
        const result = await response.json();
        console.log("Pet cadastrado com sucesso:", result);

        alert("Pet Cadastrado com sucesso!");

        // Limpa o formulário após sucesso
        setFormData({
          name: "",
          location: "",
          age: {
            value: "",
            unit: "year",
          },
          birthday: "",
          neutered: "",
          gender: "",
          size: "",
          vaccinated: "",
          predominantColor: "",
          owner: {
            name: "",
            phone: "",
          },
          description: "",
        });

        setSelectedImages([]);
        setPreviewUrls([]);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao cadastrar pet");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar pet. Tente novamente: " + error.message);
    }
  };

  // essa função primeiramente "filtra" os arquivos de imagens e depois disso cria a url de cada imagem
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // serve para limitar a quantidade de arquivos, nesse caso o máximo é 5
    if (previewUrls.length > 4) {
      alert("Máximo de 5 imagens permitidas");
      return;
    }

    // faz a validação dos tipos para verificar se são realmente fotos atraves da leitura do tipo do arquivo
    const validFiles = files.filter((file) => {
      if (!file.type.startsWith("image/")) {
        alert(`${file.name} não é uma imagem válida`);
        return false;
      }
      return true;
    });

    const updatedImages = [...selectedImages, ...validFiles];
    setSelectedImages(updatedImages);

    // cria a url das imagens, nota que são url temporarias para exibir no preview
    const newUrls = validFiles.map((file) => URL.createObjectURL(file));
    const updatedUrls = [...previewUrls, ...newUrls];
    setPreviewUrls(updatedUrls);

  };

  return (
    <div className="class">
      <span className="text-black flex justify-center text-2x1">
        Create Post Adoption
      </span>
      <div className="Body">
        <div className="flex flex-col gap-4">
          <div
            className={previewUrls.length > 0 ? "Picture has-image" : "Picture"}
          >
            {/* ultima imagem adicionada */}
            {previewUrls.length > 0 ? (
              <div className="imagemPreviewContainer">
                <div className="imagePreview">
                  <img src={previewUrls[previewUrls.length - 1]} alt={""} />
                </div>
              </div>
            ) : (
              <label htmlFor="imageUpload" className="uploadLabel">
                <input
                  type="file"
                  id="imageUpload"
                  multiple
                  accept="image/*,image/jpeg,image/jpg,image/png,image/gif,image/webp"
                  onChange={handleImageChange}
                />
                <div className="iconsPicture">
                  <img src={Camera} alt="" />
                  <img src={Image} alt="" />
                </div>
                <span>Select or move some photos</span>
              </label>
            )}
          </div>

          {/* exibi a miniatura das imagens anterior */}
          {previewUrls.length > 0 && (
            <div className="listImages">
              {/* exibi TODAS as imagens */}
              {previewUrls.slice(0, -1).map((url, index) => (
                <div className="addMoreImage">
                  <img src={url} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}

              {/* Botão para adicionar mais imagens */}
              {previewUrls.length < 5 && (
                <div className="addMoreImage">
                  <input
                    type="file"
                    id="AddMoreImage"
                    multiple
                    accept="image/*,image/jpeg,image/jpg,image/png,image/gif,image/webp"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="AddMoreImage">
                    <img src={Plus} alt="Adicionar mais imagens" />
                  </label>
                </div>
              )}
            </div>
          )}
        </div>

        <form>
          <div className="Forms">
            <Input
              Name={"Pet's Name"}
              Img={Paws}
              Placeholder={"Name"}
              Import={true}
              Type={"text"}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <Input
              Name={"Pet's Location"}
              Img={Location}
              Placeholder={"Location"}
              Import={true}
              Type={"text"}
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />

            <div className="flex-rowe">
              <Input
                Name={"Pet's age or approximate"}
                Img={Time}
                Placeholder={"Age"}
                Import={true}
                Type={"text"}
                name="age.value"
                value={formData.age.value}
                onChange={handleInputChange}
              />
              <Input
                Name={"Pet's Birthday"}
                Img={Cake}
                Placeholder={""}
                Import={false}
                Type={"date"}
                name="birthday"
                value={formData.birthday}
                onChange={handleInputChange}
              />
              <Input
                Name={"Neutered"}
                Img={Neureted}
                Placeholder={"Yes"}
                Import={true}
                Type={"text"}
                name="neutered"
                value={formData.neutered}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex-rowe">
              <Input
                Name={"Select Gender"}
                Img={Gender}
                Placeholder={"Gender"}
                Import={true}
                Type={"text"}
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              />
              <Input
                Name={"Pet's Size"}
                Img={Size}
                Placeholder={"Size"}
                Import={true}
                Type={"text"}
                name="size"
                value={formData.size}
                onChange={handleInputChange}
              />
              <Input
                Name={"Vaccinated"}
                Img={Vaccine}
                Placeholder={"Yes"}
                Import={true}
                Type={"text"}
                name="vaccinated"
                value={formData.vaccinated}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex-rowe">
              <Input
                Name={"Predominant Color"}
                Img={Color}
                Placeholder={"Color"}
                Import={true}
                Type={"text"}
                name="predominantColor"
                value={formData.predominantColor}
                onChange={handleInputChange}
              />
              <Input
                Name={"Telephone pet's owner"}
                Img={Telephone}
                Placeholder={"(11) 91234-5678"}
                Import={true}
                Type={"tel"}
                name="owner.phone"
                value={formData.owner.phone}
                onChange={handleInputChange}
              />
            </div>

            <Input
              Name={"Name pet's owner"}
              Img={Profile}
              Placeholder={"Name"}
              Import={true}
              Type={"text"}
              name="owner.name"
              value={formData.owner.name}
              onChange={handleInputChange}
            />

            <Input
              Name={"Add a description"}
              Img={Chat}
              Placeholder={"Description"}
              Import={false}
              Type={"text"}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />

            <button className="btnPost" type="submit" onClick={handleSubmit}>
              <span>Make a Post</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostAdoption;
