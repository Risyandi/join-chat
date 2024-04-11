import axios from "axios";
const { REACT_APP_BASE_URL } = process.env;

export const getPreviewAdsList = async (pages) => {
  const previewAds = await axios.get(
    `${REACT_APP_BASE_URL}/api/v1/preview-ads?page=${pages}`,
  );
  return previewAds.data;
};

export const getPreviewAds = async (id) => {
  const previewAds = await axios.get(
    `${REACT_APP_BASE_URL}/api/v1/preview-ads/${id}`,
  );
  return previewAds.data;
};

export const updatePreviewAds = async (id, formdata) => {
  const previewAds = await axios.put(
    `${REACT_APP_BASE_URL}/api/v1/preview-ads/${id}`,
    formdata
  );
  return previewAds.data;
};

export const deletePreviewAds = async (id) => {
  const previewAds = await axios.delete(
    `${REACT_APP_BASE_URL}/api/v1/preview-ads/${id}`,
  );
  return previewAds.data;
};

export const createPreviewAds = async (formdata) => {
  const previewAds = await axios.post(
    `${REACT_APP_BASE_URL}/api/v1/preview-ads/create`,
    formdata,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return previewAds.data;
};
