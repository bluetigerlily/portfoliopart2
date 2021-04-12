package com.projects.Basicwebsite.beans;

import java.io.UnsupportedEncodingException;
import java.lang.invoke.MethodHandles.Lookup;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Locale;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "user")
public class User {

	
	

		@Id
		@Column(name = "userid", unique = true)
		private int id;
		
		
		@Column(name = "username")
		private String username;
		
		@Column(name = "password")
		private String password;
		
		@Column(name = "firstname")
		private String firstname;
		
		@Column(name = "lastname")
		private String lastname;
		
		@Column(name = "useremail")
		private String useremail;
		
		@Column(name="fundsavailable")
		private int fundsavailable;
		
		@Column(name = "fundspending")
		private int fundspending;
		
		@Column(name = "role")
		private String role;
		
		@Column(name = "events")
		private String events;

		
		
		@Override
		public String toString() {
			return "User [id=" + id + ", username=" + username + ", password=" + password + ", firstname=" + firstname
					+ ", lastname=" + lastname + ", useremail=" + useremail + ", fundsavailable=" + fundsavailable
					+ ", fundspending=" + fundspending + ", role=" + role + ", events=" + events + ", length()="
					+ length() + ", isEmpty()=" + isEmpty() + ", getBytes()=" + Arrays.toString(getBytes())
					+ ", toLowerCase()=" + toLowerCase() + ", toUpperCase()=" + toUpperCase() + ", trim()=" + trim()
					+ ", strip()=" + strip() + ", stripLeading()=" + stripLeading() + ", stripTrailing()="
					+ stripTrailing() + ", isBlank()=" + isBlank() + ", lines()=" + lines() + ", stripIndent()="
					+ stripIndent() + ", translateEscapes()=" + translateEscapes() + ", chars()=" + chars()
					+ ", codePoints()=" + codePoints() + ", toCharArray()=" + Arrays.toString(toCharArray())
					+ ", intern()=" + intern() + ", describeConstable()=" + describeConstable() + ", hashCode()="
					+ hashCode() + ", getId()=" + getId() + ", getUsername()=" + getUsername() + ", getPassword()="
					+ getPassword() + ", getFirstname()=" + getFirstname() + ", getLastname()=" + getLastname()
					+ ", getUseremail()=" + getUseremail() + ", getFundsavailable()=" + getFundsavailable()
					+ ", getFundspending()=" + getFundspending() + ", getRole()=" + getRole() + ", getEvents()="
					+ getEvents() + ", getClass()=" + getClass() + ", toString()=" + super.toString() + "]";
		}

		
		
		public User() {
			super();
		}



		public User(int id, String username, String password, String firstname, String lastname, String useremail,
				int fundsavailable, int fundspending, String role, String events) {
			super();
			this.id = id;
			this.username = username;
			this.password = password;
			this.firstname = firstname;
			this.lastname = lastname;
			this.useremail = useremail;
			this.fundsavailable = fundsavailable;
			this.fundspending = fundspending;
			this.role = role;
			this.events = events;
		}



	



		public int length() {
			return useremail.length();
		}



		public boolean isEmpty() {
			return useremail.isEmpty();
		}



		public char charAt(int index) {
			return useremail.charAt(index);
		}



		public int codePointAt(int index) {
			return useremail.codePointAt(index);
		}



		public int codePointBefore(int index) {
			return useremail.codePointBefore(index);
		}



		public int codePointCount(int beginIndex, int endIndex) {
			return useremail.codePointCount(beginIndex, endIndex);
		}



		public int offsetByCodePoints(int index, int codePointOffset) {
			return useremail.offsetByCodePoints(index, codePointOffset);
		}



		public void getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin) {
			useremail.getChars(srcBegin, srcEnd, dst, dstBegin);
		}






		public byte[] getBytes(String charsetName) throws UnsupportedEncodingException {
			return useremail.getBytes(charsetName);
		}



		public byte[] getBytes(Charset charset) {
			return useremail.getBytes(charset);
		}



		public byte[] getBytes() {
			return useremail.getBytes();
		}



		public boolean contentEquals(StringBuffer sb) {
			return useremail.contentEquals(sb);
		}



		public boolean contentEquals(CharSequence cs) {
			return useremail.contentEquals(cs);
		}



		public boolean equalsIgnoreCase(String anotherString) {
			return useremail.equalsIgnoreCase(anotherString);
		}



		public int compareTo(String anotherString) {
			return useremail.compareTo(anotherString);
		}



		public int compareToIgnoreCase(String str) {
			return useremail.compareToIgnoreCase(str);
		}



		public boolean regionMatches(int toffset, String other, int ooffset, int len) {
			return useremail.regionMatches(toffset, other, ooffset, len);
		}



		public boolean regionMatches(boolean ignoreCase, int toffset, String other, int ooffset, int len) {
			return useremail.regionMatches(ignoreCase, toffset, other, ooffset, len);
		}



		public boolean startsWith(String prefix, int toffset) {
			return useremail.startsWith(prefix, toffset);
		}



		public boolean startsWith(String prefix) {
			return useremail.startsWith(prefix);
		}



		public boolean endsWith(String suffix) {
			return useremail.endsWith(suffix);
		}



		public int indexOf(int ch) {
			return useremail.indexOf(ch);
		}



		public int indexOf(int ch, int fromIndex) {
			return useremail.indexOf(ch, fromIndex);
		}



		public int lastIndexOf(int ch) {
			return useremail.lastIndexOf(ch);
		}



		public int lastIndexOf(int ch, int fromIndex) {
			return useremail.lastIndexOf(ch, fromIndex);
		}



		public int indexOf(String str) {
			return useremail.indexOf(str);
		}



		public int indexOf(String str, int fromIndex) {
			return useremail.indexOf(str, fromIndex);
		}



		public int lastIndexOf(String str) {
			return useremail.lastIndexOf(str);
		}



		public int lastIndexOf(String str, int fromIndex) {
			return useremail.lastIndexOf(str, fromIndex);
		}



		public String substring(int beginIndex) {
			return useremail.substring(beginIndex);
		}



		public String substring(int beginIndex, int endIndex) {
			return useremail.substring(beginIndex, endIndex);
		}



		public CharSequence subSequence(int beginIndex, int endIndex) {
			return useremail.subSequence(beginIndex, endIndex);
		}



		public String concat(String str) {
			return useremail.concat(str);
		}



		public String replace(char oldChar, char newChar) {
			return useremail.replace(oldChar, newChar);
		}



		public boolean matches(String regex) {
			return useremail.matches(regex);
		}



		public boolean contains(CharSequence s) {
			return useremail.contains(s);
		}



		public String replaceFirst(String regex, String replacement) {
			return useremail.replaceFirst(regex, replacement);
		}



		public String replaceAll(String regex, String replacement) {
			return useremail.replaceAll(regex, replacement);
		}



		public String replace(CharSequence target, CharSequence replacement) {
			return useremail.replace(target, replacement);
		}



		public String[] split(String regex, int limit) {
			return useremail.split(regex, limit);
		}



		public String[] split(String regex) {
			return useremail.split(regex);
		}



		public String toLowerCase(Locale locale) {
			return useremail.toLowerCase(locale);
		}



		public String toLowerCase() {
			return useremail.toLowerCase();
		}



		public String toUpperCase(Locale locale) {
			return useremail.toUpperCase(locale);
		}



		public String toUpperCase() {
			return useremail.toUpperCase();
		}



		public String trim() {
			return useremail.trim();
		}



		public String strip() {
			return useremail.strip();
		}



		public String stripLeading() {
			return useremail.stripLeading();
		}



		public String stripTrailing() {
			return useremail.stripTrailing();
		}



		public boolean isBlank() {
			return useremail.isBlank();
		}



		public Stream<String> lines() {
			return useremail.lines();
		}



		public String indent(int n) {
			return useremail.indent(n);
		}



		public String stripIndent() {
			return useremail.stripIndent();
		}



		public String translateEscapes() {
			return useremail.translateEscapes();
		}



		public <R> R transform(Function<? super String, ? extends R> f) {
			return useremail.transform(f);
		}



		public IntStream chars() {
			return useremail.chars();
		}



		public IntStream codePoints() {
			return useremail.codePoints();
		}



		public char[] toCharArray() {
			return useremail.toCharArray();
		}



		public String formatted(Object... args) {
			return useremail.formatted(args);
		}



		public String intern() {
			return useremail.intern();
		}



		public String repeat(int count) {
			return useremail.repeat(count);
		}



		public Optional<String> describeConstable() {
			return useremail.describeConstable();
		}



		public String resolveConstantDesc(Lookup lookup) {
			return useremail.resolveConstantDesc(lookup);
		}



		public int hashCode() {
			return events.hashCode();
		}



		@Override
		public boolean equals(Object obj) {
			if (this == obj) {
				return true;
			}
			if (!(obj instanceof User)) {
				return false;
			}
			User other = (User) obj;
			if (events == null) {
				if (other.events != null) {
					return false;
				}
			} else if (!events.equals(other.events)) {
				return false;
			}
			if (firstname == null) {
				if (other.firstname != null) {
					return false;
				}
			} else if (!firstname.equals(other.firstname)) {
				return false;
			}
			if (fundsavailable != other.fundsavailable) {
				return false;
			}
			if (fundspending != other.fundspending) {
				return false;
			}
			if (id != other.id) {
				return false;
			}
			if (lastname == null) {
				if (other.lastname != null) {
					return false;
				}
			} else if (!lastname.equals(other.lastname)) {
				return false;
			}
			if (password == null) {
				if (other.password != null) {
					return false;
				}
			} else if (!password.equals(other.password)) {
				return false;
			}
			if (role == null) {
				if (other.role != null) {
					return false;
				}
			} else if (!role.equals(other.role)) {
				return false;
			}
			if (useremail == null) {
				if (other.useremail != null) {
					return false;
				}
			} else if (!useremail.equals(other.useremail)) {
				return false;
			}
			if (username == null) {
				if (other.username != null) {
					return false;
				}
			} else if (!username.equals(other.username)) {
				return false;
			}
			return true;
		}



		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getFirstname() {
			return firstname;
		}

		public void setFirstname(String firstname) {
			this.firstname = firstname;
		}

		public String getLastname() {
			return lastname;
		}

		public void setLastname(String lastname) {
			this.lastname = lastname;
		}

		public String getUseremail() {
			return useremail;
		}

		public void setUseremail(String useremail) {
			this.useremail = useremail;
		}

		public int getFundsavailable() {
			return fundsavailable;
		}

		public void setFundsavailable(int fundsavailable) {
			this.fundsavailable = fundsavailable;
		}

		public int getFundspending() {
			return fundspending;
		}

		public void setFundspending(int fundspending) {
			this.fundspending = fundspending;
		}

		public String getRole() {
			return role;
		}

		public void setRole(String role) {
			this.role = role;
		}

		public String getEvents() {
			return events;
		}

		public void setEvents(String events) {
			this.events = events;
		}






	



	



		
		
}
