import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  constructor() { }

  crystalMarkdown=`
  # A very basic HTTP server
    require "http/server"

    server = HTTP::Server.new do |context|
      context.response.content_type = "text/plain"
      context.response.print "Hello world, got #{context.request.path}!"
    end

    puts "Listening on http://127.0.0.1:8080"
    server.listen(8080)
  `

  ngOnInit(): void {
  }




}
