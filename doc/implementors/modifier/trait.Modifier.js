(function() {var implementors = {};
implementors["modifier"] = [];implementors["iron"] = ["impl <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='iron/mime/struct.Mime.html' title='iron::mime::Mime'>Mime</a>","impl <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='iron/response/trait.WriteBody.html' title='iron::response::WriteBody'>WriteBody</a>&gt;","impl&lt;R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='iron/response/struct.BodyReader.html' title='iron::response::BodyReader'>BodyReader</a>&lt;R&gt;","impl <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt;","impl&lt;'a&gt; <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for &amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>","impl&lt;'a&gt; <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>&amp;'a [</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>","impl <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/fs/struct.File.html' title='std::fs::File'>File</a>","impl&lt;'a&gt; <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for &amp;'a <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>","impl <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","impl <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='enum' href='iron/status/enum.Status.html' title='iron::status::Status'>Status</a>","impl&lt;H&gt; <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='iron/modifiers/struct.Header.html' title='iron::modifiers::Header'>Header</a>&lt;H&gt; <span class='where'>where H: <a class='trait' href='iron/headers/trait.Header.html' title='iron::headers::Header'>Header</a> + <a class='trait' href='iron/headers/trait.HeaderFormat.html' title='iron::headers::HeaderFormat'>HeaderFormat</a></span>","impl&lt;'a, 'b, H&gt; <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/request/struct.Request.html' title='iron::request::Request'>Request</a>&lt;'a, 'b&gt;&gt; for <a class='struct' href='iron/modifiers/struct.Header.html' title='iron::modifiers::Header'>Header</a>&lt;H&gt; <span class='where'>where H: <a class='trait' href='iron/headers/trait.Header.html' title='iron::headers::Header'>Header</a> + <a class='trait' href='iron/headers/trait.HeaderFormat.html' title='iron::headers::HeaderFormat'>HeaderFormat</a></span>","impl <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='iron/modifiers/struct.Redirect.html' title='iron::modifiers::Redirect'>Redirect</a>","impl <a class='trait' href='modifier/trait.Modifier.html' title='modifier::Modifier'>Modifier</a>&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='iron/modifiers/struct.RedirectRaw.html' title='iron::modifiers::RedirectRaw'>RedirectRaw</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
