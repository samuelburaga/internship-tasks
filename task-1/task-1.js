function computeSizeOnDisk(clusterSize, fileSize) {
  let fileSizeOnDisk;
  fileSizeOnDisk = Math.ceil(fileSize / clusterSize) * clusterSize;
  return fileSizeOnDisk;
}
