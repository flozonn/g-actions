

resource "aws_s3_bucket" "log_buckeet" {
  bucket = "nouveau_bucket"
}

// ec2 instance linux
resource "aws_instance" "application_server" {
  ami           = "ami-09042b2f6d07d164a"
  instance_type = "t2.micro"
  tags = {
    Name = "Mon_server_F2I_DSP"
  }
}

