import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { HiOutlineLifebuoy } from "react-icons/hi2";

const Upload = () => {
  const artCategories = [
    "Abstract",
    "Organic",
    "Impressionistic",
    "Photorealistic",
    "Expressive",
    "Surrealistic"
  ];
  const [selectedArtCategory, setSelectedArtCategory] = useState(
    artCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    //console.log(event.target.value);
    setSelectedArtCategory(event.target.value);
  };
  const handleArtSubmit=(event) => {
    event.preventDefault();
    const form=event.target;
    const art_title=form.art_title.value;
    const artist_name=form.artist_name.value;
    const image_url=form.image_url.value;
    const category=form.category.value;
    const art_description=form.art_description.value;
    const price=form.price.value;
    const Size=form.Size.value;
    const artObj={
      art_title,
      artist_name,
      image_url,
      category,
      art_description,
      price,
      Size
    }
    console.log(artObj);
    //sending data to mongodb

    fetch("http://localhost:5000/upload-art",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(artObj)
    }).then(res=>res.json()).then(data=>{
      alert("Art uploaded!!")
      form.reset();
    })
  }
  return (
    <div className="px-4 my-12 h-full w-full">
    <div className="flex flex-col items-center gap-10">
    <div className="flex items-center">
          <HiOutlineLifebuoy className="text-9xl text-red-700 font-bold -mb-4" />
          <div className="text-9xl font-extrabold text-red-700">Artistry Atelier</div>
        </div>
      <h2 className=" mt-3 mb-3 text-5xl font-bold text-[#15121F]">Upload A Creation</h2>
      <form onSubmit={handleArtSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="art_title" value="Art Title" />
            </div>
            <TextInput
              id="art_title"
              name="art_title"
              type="text"
              placeholder=" Enter Art Title"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="artist_name" value="Artist Name" />
            </div>
            <TextInput
              id="artist_name"
              name="artist_name"
              type="text"
              placeholder=" Enter Artist Name"
              required
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="image_url" value="Art Image URL" />
            </div>
            <TextInput
              id="image_url"
              name="image_url"
              type="text"
              placeholder="Art Image URL"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Art Category" />
            </div>
            <select
              id="inputState"
              name="category"
              className="w-full rounded"
              value={selectedArtCategory}
              onChange={handleChangeSelectedValue}
            >
              {artCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="art_description" value="Art Description" />
              <div />
              <Textarea
                id="art_description"
                name="art_description"
                placeholder="Write Art Description"
                required
                rows={5}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="lg:w-full">
              <div className="mb-2 block">
                <Label htmlFor="price" value="Art Price" />
                <div />
                <TextInput
                  id="price"
                  name="price"
                  placeholder="Enter Art Price"
                  required
                  className=""
                />
              </div>
            </div>
            <div className="lg:w-full">
              <div className="mb-2 block">
                <Label htmlFor="Size" value="Art Size" />
                <div />
                <TextInput
                  id="Size"
                  name="Size"
                  placeholder="Enter Art Size (A x Bunits)"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-5 bg-red-700 ">Upload Art</Button>


      </form>
    </div>
    
    </div>
  );
};

export default Upload;
