function computeSizeOnDisk(clusterSize, fileSize) {
  return Math.ceil(fileSize / clusterSize) * clusterSize;
}

let sizeOnDisk = computeSizeOnDisk(512, 1500);
console.log(sizeOnDisk);
