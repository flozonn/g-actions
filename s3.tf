

resource "aws_s3_bucket" "log_buckeet" {
  bucket = "nouveau bucket"
}

// ec2 instance linux
resource "aws_instance" "application_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  tags = {
    Name = "Mon_server_F2I_DSP"
  }
}

