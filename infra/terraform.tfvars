# Estos valores se usan en el pipeline.
# acm_certificate_arn se pasa como TF_VAR en el workflow.

aws_region           = "us-east-1"
bucket_name          = "extremedev-website"
environment          = "production"
domain_names         = ["extremedev.cl", "www.extremedev.cl"]
acm_certificate_arn  = "arn:aws:acm:us-east-1:190493316196:certificate/d1b26770-9619-4787-91fb-a29bb89272a1"

