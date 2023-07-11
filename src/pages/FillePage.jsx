import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useState } from 'react';

import storage from '../firebaseConfig';

const FillePage = () => {
  const [file, setFile] = useState('');
  const [percent, setPercent] = useState(0);

  const handleChange = e => {
    setFile(e.target.files[0]);
  };
  function handleUpload() {
    if (!file) {
      console.log('Please choose a file first!');
      return;
    }

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );

        // update progress
        setPercent(percent);
      },
      err => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then(imageUrl => {
          addItem({ title: 'New title', imageUrl: imageUrl })
          console.log(url);
        });
      },
    );
  }

  useEffect(() => {
    // file && handleUpload();
  }, [file]);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <h1>FillePage</h1>
      <input type="file" accept="image/*" onChange={handleChange} />
      <h3>{percent} %</h3>
      <button>Upload to Firebase</button>
    </form>
  );
};

export default FillePage;
