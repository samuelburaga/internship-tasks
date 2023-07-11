function computeSizeOnDisk(clusterSize, fileSize) {
  let fileSizeOnDisk;
  fileSizeOnDisk = Math.ceil(fileSize / clusterSize) * clusterSize;
  return fileSizeOnDisk;
}
let sizeOnDisk = computeSizeOnDisk(512, 1500);
console.log(sizeOnDisk);
