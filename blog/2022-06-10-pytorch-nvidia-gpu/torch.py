import torch

print("CUDA Available:", torch.cuda.is_available())
print("CUDA Devices count:",torch.cuda.device_count())
print("CUDA Version: ", torch.version.cuda)

device = "cuda" if torch.cuda.is_available() else "cpu"
device = torch.device(device)