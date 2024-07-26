
// ec2 instance linux
resource "aws_instance" "application_servesr" {
  ami           = "ami-09042b2f6d07d164a"
  instance_type = "t2.small"
  tags = {
    Name = "Mon_server_F2I_DSP2"
  }
}
