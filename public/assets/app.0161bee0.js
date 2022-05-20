var Gn=Object.defineProperty;var Jn=(t,e,n)=>e in t?Gn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var U=(t,e,n)=>(Jn(t,typeof e!="symbol"?e+"":e,n),n),xt=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var D=(t,e,n)=>(xt(t,e,"read from private field"),n?n.call(t):e.get(t)),ie=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},de=(t,e,n,i)=>(xt(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n);import"./app.9e857949.js";import{S as Xn,i as Kn,p as ei,a as ti,$ as w,D as ni,r as ii}from"./vendor.424d3216.js";/*!
 * =====
 * This file is part of MuseReduce, a webapp for graph-based musical analysis
 *
 * Copyright (C) 2022  Petter Ericson, Yannis Rammos, Mehdi Merah, and the EPFL Digital and Cognitive Musicology Lab (DCML).
 *
 * MuseReduce is free software: you can redistribute it and/or modify it under the terms of the Affero General Public License as published by the Free Software Foundation. MuseReduce is distributed without explicit or implicit warranty. See the Affero General Public License at https://www.gnu.org/licenses/agpl-3.0.en.html for more details.
 * =====
 * GNU AFFERO GENERAL PUBLIC LICENSE
 * Version 3, 19 November 2007
 *
 * Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 * Everyone is permitted to copy and distribute verbatim copies
 * of this license document, but changing it is not allowed.
 *
 * Preamble
 *
 * The GNU Affero General Public License is a free, copyleft license for
 * software and other kinds of works, specifically designed to ensure
 * cooperation with the community in the case of network server software.
 *
 * The licenses for most software and other practical works are designed
 * to take away your freedom to share and change the works.  By contrast,
 * our General Public Licenses are intended to guarantee your freedom to
 * share and change all versions of a program--to make sure it remains free
 * software for all its users.
 *
 * When we speak of free software, we are referring to freedom, not
 * price.  Our General Public Licenses are designed to make sure that you
 * have the freedom to distribute copies of free software (and charge for
 * them if you wish), that you receive source code or can get it if you
 * want it, that you can change the software or use pieces of it in new
 * free programs, and that you know you can do these things.
 *
 * Developers that use our General Public Licenses protect your rights
 * with two steps: (1) assert copyright on the software, and (2) offer
 * you this License which gives you legal permission to copy, distribute
 * and/or modify the software.
 *
 * A secondary benefit of defending all users' freedom is that
 * improvements made in alternate versions of the program, if they
 * receive widespread use, become available for other developers to
 * incorporate.  Many developers of free software are heartened and
 * encouraged by the resulting cooperation.  However, in the case of
 * software used on network servers, this result may fail to come about.
 * The GNU General Public License permits making a modified version and
 * letting the public access it on a server without ever releasing its
 * source code to the public.
 *
 * The GNU Affero General Public License is designed specifically to
 * ensure that, in such cases, the modified source code becomes available
 * to the community.  It requires the operator of a network server to
 * provide the source code of the modified version running there to the
 * users of that server.  Therefore, public use of a modified version, on
 * a publicly accessible server, gives the public access to the source
 * code of the modified version.
 *
 * An older license, called the Affero General Public License and
 * published by Affero, was designed to accomplish similar goals.  This is
 * a different license, not a version of the Affero GPL, but Affero has
 * released a new version of the Affero GPL which permits relicensing under
 * this license.
 *
 * The precise terms and conditions for copying, distribution and
 * modification follow.
 *
 * TERMS AND CONDITIONS
 *
 * 0. Definitions.
 *
 * "This License" refers to version 3 of the GNU Affero General Public License.
 *
 * "Copyright" also means copyright-like laws that apply to other kinds of
 * works, such as semiconductor masks.
 *
 * "The Program" refers to any copyrightable work licensed under this
 * License.  Each licensee is addressed as "you".  "Licensees" and
 * "recipients" may be individuals or organizations.
 *
 * To "modify" a work means to copy from or adapt all or part of the work
 * in a fashion requiring copyright permission, other than the making of an
 * exact copy.  The resulting work is called a "modified version" of the
 * earlier work or a work "based on" the earlier work.
 *
 * A "covered work" means either the unmodified Program or a work based
 * on the Program.
 *
 * To "propagate" a work means to do anything with it that, without
 * permission, would make you directly or secondarily liable for
 * infringement under applicable copyright law, except executing it on a
 * computer or modifying a private copy.  Propagation includes copying,
 * distribution (with or without modification), making available to the
 * public, and in some countries other activities as well.
 *
 * To "convey" a work means any kind of propagation that enables other
 * parties to make or receive copies.  Mere interaction with a user through
 * a computer network, with no transfer of a copy, is not conveying.
 *
 * An interactive user interface displays "Appropriate Legal Notices"
 * to the extent that it includes a convenient and prominently visible
 * feature that (1) displays an appropriate copyright notice, and (2)
 * tells the user that there is no warranty for the work (except to the
 * extent that warranties are provided), that licensees may convey the
 * work under this License, and how to view a copy of this License.  If
 * the interface presents a list of user commands or options, such as a
 * menu, a prominent item in the list meets this criterion.
 *
 * 1. Source Code.
 *
 * The "source code" for a work means the preferred form of the work
 * for making modifications to it.  "Object code" means any non-source
 * form of a work.
 *
 * A "Standard Interface" means an interface that either is an official
 * standard defined by a recognized standards body, or, in the case of
 * interfaces specified for a particular programming language, one that
 * is widely used among developers working in that language.
 *
 * The "System Libraries" of an executable work include anything, other
 * than the work as a whole, that (a) is included in the normal form of
 * packaging a Major Component, but which is not part of that Major
 * Component, and (b) serves only to enable use of the work with that
 * Major Component, or to implement a Standard Interface for which an
 * implementation is available to the public in source code form.  A
 * "Major Component", in this context, means a major essential component
 * (kernel, window system, and so on) of the specific operating system
 * (if any) on which the executable work runs, or a compiler used to
 * produce the work, or an object code interpreter used to run it.
 *
 * The "Corresponding Source" for a work in object code form means all
 * the source code needed to generate, install, and (for an executable
 * work) run the object code and to modify the work, including scripts to
 * control those activities.  However, it does not include the work's
 * System Libraries, or general-purpose tools or generally available free
 * programs which are used unmodified in performing those activities but
 * which are not part of the work.  For example, Corresponding Source
 * includes interface definition files associated with source files for
 * the work, and the source code for shared libraries and dynamically
 * linked subprograms that the work is specifically designed to require,
 * such as by intimate data communication or control flow between those
 * subprograms and other parts of the work.
 *
 * The Corresponding Source need not include anything that users
 * can regenerate automatically from other parts of the Corresponding
 * Source.
 *
 * The Corresponding Source for a work in source code form is that
 * same work.
 *
 * 2. Basic Permissions.
 *
 * All rights granted under this License are granted for the term of
 * copyright on the Program, and are irrevocable provided the stated
 * conditions are met.  This License explicitly affirms your unlimited
 * permission to run the unmodified Program.  The output from running a
 * covered work is covered by this License only if the output, given its
 * content, constitutes a covered work.  This License acknowledges your
 * rights of fair use or other equivalent, as provided by copyright law.
 *
 * You may make, run and propagate covered works that you do not
 * convey, without conditions so long as your license otherwise remains
 * in force.  You may convey covered works to others for the sole purpose
 * of having them make modifications exclusively for you, or provide you
 * with facilities for running those works, provided that you comply with
 * the terms of this License in conveying all material for which you do
 * not control copyright.  Those thus making or running the covered works
 * for you must do so exclusively on your behalf, under your direction
 * and control, on terms that prohibit them from making any copies of
 * your copyrighted material outside their relationship with you.
 *
 * Conveying under any other circumstances is permitted solely under
 * the conditions stated below.  Sublicensing is not allowed; section 10
 * makes it unnecessary.
 *
 * 3. Protecting Users' Legal Rights From Anti-Circumvention Law.
 *
 * No covered work shall be deemed part of an effective technological
 * measure under any applicable law fulfilling obligations under article
 * 11 of the WIPO copyright treaty adopted on 20 December 1996, or
 * similar laws prohibiting or restricting circumvention of such
 * measures.
 *
 * When you convey a covered work, you waive any legal power to forbid
 * circumvention of technological measures to the extent such circumvention
 * is effected by exercising rights under this License with respect to
 * the covered work, and you disclaim any intention to limit operation or
 * modification of the work as a means of enforcing, against the work's
 * users, your or third parties' legal rights to forbid circumvention of
 * technological measures.
 *
 * 4. Conveying Verbatim Copies.
 *
 * You may convey verbatim copies of the Program's source code as you
 * receive it, in any medium, provided that you conspicuously and
 * appropriately publish on each copy an appropriate copyright notice;
 * keep intact all notices stating that this License and any
 * non-permissive terms added in accord with section 7 apply to the code;
 * keep intact all notices of the absence of any warranty; and give all
 * recipients a copy of this License along with the Program.
 *
 * You may charge any price or no price for each copy that you convey,
 * and you may offer support or warranty protection for a fee.
 *
 * 5. Conveying Modified Source Versions.
 *
 * You may convey a work based on the Program, or the modifications to
 * produce it from the Program, in the form of source code under the
 * terms of section 4, provided that you also meet all of these conditions:
 *
 * a) The work must carry prominent notices stating that you modified
 * it, and giving a relevant date.
 *
 * b) The work must carry prominent notices stating that it is
 * released under this License and any conditions added under section
 * 7.  This requirement modifies the requirement in section 4 to
 * "keep intact all notices".
 *
 * c) You must license the entire work, as a whole, under this
 * License to anyone who comes into possession of a copy.  This
 * License will therefore apply, along with any applicable section 7
 * additional terms, to the whole of the work, and all its parts,
 * regardless of how they are packaged.  This License gives no
 * permission to license the work in any other way, but it does not
 * invalidate such permission if you have separately received it.
 *
 * d) If the work has interactive user interfaces, each must display
 * Appropriate Legal Notices; however, if the Program has interactive
 * interfaces that do not display Appropriate Legal Notices, your
 * work need not make them do so.
 *
 * A compilation of a covered work with other separate and independent
 * works, which are not by their nature extensions of the covered work,
 * and which are not combined with it such as to form a larger program,
 * in or on a volume of a storage or distribution medium, is called an
 * "aggregate" if the compilation and its resulting copyright are not
 * used to limit the access or legal rights of the compilation's users
 * beyond what the individual works permit.  Inclusion of a covered work
 * in an aggregate does not cause this License to apply to the other
 * parts of the aggregate.
 *
 * 6. Conveying Non-Source Forms.
 *
 * You may convey a covered work in object code form under the terms
 * of sections 4 and 5, provided that you also convey the
 * machine-readable Corresponding Source under the terms of this License,
 * in one of these ways:
 *
 * a) Convey the object code in, or embodied in, a physical product
 * (including a physical distribution medium), accompanied by the
 * Corresponding Source fixed on a durable physical medium
 * customarily used for software interchange.
 *
 * b) Convey the object code in, or embodied in, a physical product
 * (including a physical distribution medium), accompanied by a
 * written offer, valid for at least three years and valid for as
 * long as you offer spare parts or customer support for that product
 * model, to give anyone who possesses the object code either (1) a
 * copy of the Corresponding Source for all the software in the
 * product that is covered by this License, on a durable physical
 * medium customarily used for software interchange, for a price no
 * more than your reasonable cost of physically performing this
 * conveying of source, or (2) access to copy the
 * Corresponding Source from a network server at no charge.
 *
 * c) Convey individual copies of the object code with a copy of the
 * written offer to provide the Corresponding Source.  This
 * alternative is allowed only occasionally and noncommercially, and
 * only if you received the object code with such an offer, in accord
 * with subsection 6b.
 *
 * d) Convey the object code by offering access from a designated
 * place (gratis or for a charge), and offer equivalent access to the
 * Corresponding Source in the same way through the same place at no
 * further charge.  You need not require recipients to copy the
 * Corresponding Source along with the object code.  If the place to
 * copy the object code is a network server, the Corresponding Source
 * may be on a different server (operated by you or a third party)
 * that supports equivalent copying facilities, provided you maintain
 * clear directions next to the object code saying where to find the
 * Corresponding Source.  Regardless of what server hosts the
 * Corresponding Source, you remain obligated to ensure that it is
 * available for as long as needed to satisfy these requirements.
 *
 * e) Convey the object code using peer-to-peer transmission, provided
 * you inform other peers where the object code and Corresponding
 * Source of the work are being offered to the general public at no
 * charge under subsection 6d.
 *
 * A separable portion of the object code, whose source code is excluded
 * from the Corresponding Source as a System Library, need not be
 * included in conveying the object code work.
 *
 * A "User Product" is either (1) a "consumer product", which means any
 * tangible personal property which is normally used for personal, family,
 * or household purposes, or (2) anything designed or sold for incorporation
 * into a dwelling.  In determining whether a product is a consumer product,
 * doubtful cases shall be resolved in favor of coverage.  For a particular
 * product received by a particular user, "normally used" refers to a
 * typical or common use of that class of product, regardless of the status
 * of the particular user or of the way in which the particular user
 * actually uses, or expects or is expected to use, the product.  A product
 * is a consumer product regardless of whether the product has substantial
 * commercial, industrial or non-consumer uses, unless such uses represent
 * the only significant mode of use of the product.
 *
 * "Installation Information" for a User Product means any methods,
 * procedures, authorization keys, or other information required to install
 * and execute modified versions of a covered work in that User Product from
 * a modified version of its Corresponding Source.  The information must
 * suffice to ensure that the continued functioning of the modified object
 * code is in no case prevented or interfered with solely because
 * modification has been made.
 *
 * If you convey an object code work under this section in, or with, or
 * specifically for use in, a User Product, and the conveying occurs as
 * part of a transaction in which the right of possession and use of the
 * User Product is transferred to the recipient in perpetuity or for a
 * fixed term (regardless of how the transaction is characterized), the
 * Corresponding Source conveyed under this section must be accompanied
 * by the Installation Information.  But this requirement does not apply
 * if neither you nor any third party retains the ability to install
 * modified object code on the User Product (for example, the work has
 * been installed in ROM).
 *
 * The requirement to provide Installation Information does not include a
 * requirement to continue to provide support service, warranty, or updates
 * for a work that has been modified or installed by the recipient, or for
 * the User Product in which it has been modified or installed.  Access to a
 * network may be denied when the modification itself materially and
 * adversely affects the operation of the network or violates the rules and
 * protocols for communication across the network.
 *
 * Corresponding Source conveyed, and Installation Information provided,
 * in accord with this section must be in a format that is publicly
 * documented (and with an implementation available to the public in
 * source code form), and must require no special password or key for
 * unpacking, reading or copying.
 *
 * 7. Additional Terms.
 *
 * "Additional permissions" are terms that supplement the terms of this
 * License by making exceptions from one or more of its conditions.
 * Additional permissions that are applicable to the entire Program shall
 * be treated as though they were included in this License, to the extent
 * that they are valid under applicable law.  If additional permissions
 * apply only to part of the Program, that part may be used separately
 * under those permissions, but the entire Program remains governed by
 * this License without regard to the additional permissions.
 *
 * When you convey a copy of a covered work, you may at your option
 * remove any additional permissions from that copy, or from any part of
 * it.  (Additional permissions may be written to require their own
 * removal in certain cases when you modify the work.)  You may place
 * additional permissions on material, added by you to a covered work,
 * for which you have or can give appropriate copyright permission.
 *
 * Notwithstanding any other provision of this License, for material you
 * add to a covered work, you may (if authorized by the copyright holders of
 * that material) supplement the terms of this License with terms:
 *
 * a) Disclaiming warranty or limiting liability differently from the
 * terms of sections 15 and 16 of this License; or
 *
 * b) Requiring preservation of specified reasonable legal notices or
 * author attributions in that material or in the Appropriate Legal
 * Notices displayed by works containing it; or
 *
 * c) Prohibiting misrepresentation of the origin of that material, or
 * requiring that modified versions of such material be marked in
 * reasonable ways as different from the original version; or
 *
 * d) Limiting the use for publicity purposes of names of licensors or
 * authors of the material; or
 *
 * e) Declining to grant rights under trademark law for use of some
 * trade names, trademarks, or service marks; or
 *
 * f) Requiring indemnification of licensors and authors of that
 * material by anyone who conveys the material (or modified versions of
 * it) with contractual assumptions of liability to the recipient, for
 * any liability that these contractual assumptions directly impose on
 * those licensors and authors.
 *
 * All other non-permissive additional terms are considered "further
 * restrictions" within the meaning of section 10.  If the Program as you
 * received it, or any part of it, contains a notice stating that it is
 * governed by this License along with a term that is a further
 * restriction, you may remove that term.  If a license document contains
 * a further restriction but permits relicensing or conveying under this
 * License, you may add to a covered work material governed by the terms
 * of that license document, provided that the further restriction does
 * not survive such relicensing or conveying.
 *
 * If you add terms to a covered work in accord with this section, you
 * must place, in the relevant source files, a statement of the
 * additional terms that apply to those files, or a notice indicating
 * where to find the applicable terms.
 *
 * Additional terms, permissive or non-permissive, may be stated in the
 * form of a separately written license, or stated as exceptions;
 * the above requirements apply either way.
 *
 * 8. Termination.
 *
 * You may not propagate or modify a covered work except as expressly
 * provided under this License.  Any attempt otherwise to propagate or
 * modify it is void, and will automatically terminate your rights under
 * this License (including any patent licenses granted under the third
 * paragraph of section 11).
 *
 * However, if you cease all violation of this License, then your
 * license from a particular copyright holder is reinstated (a)
 * provisionally, unless and until the copyright holder explicitly and
 * finally terminates your license, and (b) permanently, if the copyright
 * holder fails to notify you of the violation by some reasonable means
 * prior to 60 days after the cessation.
 *
 * Moreover, your license from a particular copyright holder is
 * reinstated permanently if the copyright holder notifies you of the
 * violation by some reasonable means, this is the first time you have
 * received notice of violation of this License (for any work) from that
 * copyright holder, and you cure the violation prior to 30 days after
 * your receipt of the notice.
 *
 * Termination of your rights under this section does not terminate the
 * licenses of parties who have received copies or rights from you under
 * this License.  If your rights have been terminated and not permanently
 * reinstated, you do not qualify to receive new licenses for the same
 * material under section 10.
 *
 * 9. Acceptance Not Required for Having Copies.
 *
 * You are not required to accept this License in order to receive or
 * run a copy of the Program.  Ancillary propagation of a covered work
 * occurring solely as a consequence of using peer-to-peer transmission
 * to receive a copy likewise does not require acceptance.  However,
 * nothing other than this License grants you permission to propagate or
 * modify any covered work.  These actions infringe copyright if you do
 * not accept this License.  Therefore, by modifying or propagating a
 * covered work, you indicate your acceptance of this License to do so.
 *
 * 10. Automatic Licensing of Downstream Recipients.
 *
 * Each time you convey a covered work, the recipient automatically
 * receives a license from the original licensors, to run, modify and
 * propagate that work, subject to this License.  You are not responsible
 * for enforcing compliance by third parties with this License.
 *
 * An "entity transaction" is a transaction transferring control of an
 * organization, or substantially all assets of one, or subdividing an
 * organization, or merging organizations.  If propagation of a covered
 * work results from an entity transaction, each party to that
 * transaction who receives a copy of the work also receives whatever
 * licenses to the work the party's predecessor in interest had or could
 * give under the previous paragraph, plus a right to possession of the
 * Corresponding Source of the work from the predecessor in interest, if
 * the predecessor has it or can get it with reasonable efforts.
 *
 * You may not impose any further restrictions on the exercise of the
 * rights granted or affirmed under this License.  For example, you may
 * not impose a license fee, royalty, or other charge for exercise of
 * rights granted under this License, and you may not initiate litigation
 * (including a cross-claim or counterclaim in a lawsuit) alleging that
 * any patent claim is infringed by making, using, selling, offering for
 * sale, or importing the Program or any portion of it.
 *
 * 11. Patents.
 *
 * A "contributor" is a copyright holder who authorizes use under this
 * License of the Program or a work on which the Program is based.  The
 * work thus licensed is called the contributor's "contributor version".
 *
 * A contributor's "essential patent claims" are all patent claims
 * owned or controlled by the contributor, whether already acquired or
 * hereafter acquired, that would be infringed by some manner, permitted
 * by this License, of making, using, or selling its contributor version,
 * but do not include claims that would be infringed only as a
 * consequence of further modification of the contributor version.  For
 * purposes of this definition, "control" includes the right to grant
 * patent sublicenses in a manner consistent with the requirements of
 * this License.
 *
 * Each contributor grants you a non-exclusive, worldwide, royalty-free
 * patent license under the contributor's essential patent claims, to
 * make, use, sell, offer for sale, import and otherwise run, modify and
 * propagate the contents of its contributor version.
 *
 * In the following three paragraphs, a "patent license" is any express
 * agreement or commitment, however denominated, not to enforce a patent
 * (such as an express permission to practice a patent or covenant not to
 * sue for patent infringement).  To "grant" such a patent license to a
 * party means to make such an agreement or commitment not to enforce a
 * patent against the party.
 *
 * If you convey a covered work, knowingly relying on a patent license,
 * and the Corresponding Source of the work is not available for anyone
 * to copy, free of charge and under the terms of this License, through a
 * publicly available network server or other readily accessible means,
 * then you must either (1) cause the Corresponding Source to be so
 * available, or (2) arrange to deprive yourself of the benefit of the
 * patent license for this particular work, or (3) arrange, in a manner
 * consistent with the requirements of this License, to extend the patent
 * license to downstream recipients.  "Knowingly relying" means you have
 * actual knowledge that, but for the patent license, your conveying the
 * covered work in a country, or your recipient's use of the covered work
 * in a country, would infringe one or more identifiable patents in that
 * country that you have reason to believe are valid.
 *
 * If, pursuant to or in connection with a single transaction or
 * arrangement, you convey, or propagate by procuring conveyance of, a
 * covered work, and grant a patent license to some of the parties
 * receiving the covered work authorizing them to use, propagate, modify
 * or convey a specific copy of the covered work, then the patent license
 * you grant is automatically extended to all recipients of the covered
 * work and works based on it.
 *
 * A patent license is "discriminatory" if it does not include within
 * the scope of its coverage, prohibits the exercise of, or is
 * conditioned on the non-exercise of one or more of the rights that are
 * specifically granted under this License.  You may not convey a covered
 * work if you are a party to an arrangement with a third party that is
 * in the business of distributing software, under which you make payment
 * to the third party based on the extent of your activity of conveying
 * the work, and under which the third party grants, to any of the
 * parties who would receive the covered work from you, a discriminatory
 * patent license (a) in connection with copies of the covered work
 * conveyed by you (or copies made from those copies), or (b) primarily
 * for and in connection with specific products or compilations that
 * contain the covered work, unless you entered into that arrangement,
 * or that patent license was granted, prior to 28 March 2007.
 *
 * Nothing in this License shall be construed as excluding or limiting
 * any implied license or other defenses to infringement that may
 * otherwise be available to you under applicable patent law.
 *
 * 12. No Surrender of Others' Freedom.
 *
 * If conditions are imposed on you (whether by court order, agreement or
 * otherwise) that contradict the conditions of this License, they do not
 * excuse you from the conditions of this License.  If you cannot convey a
 * covered work so as to satisfy simultaneously your obligations under this
 * License and any other pertinent obligations, then as a consequence you may
 * not convey it at all.  For example, if you agree to terms that obligate you
 * to collect a royalty for further conveying from those to whom you convey
 * the Program, the only way you could satisfy both those terms and this
 * License would be to refrain entirely from conveying the Program.
 *
 * 13. Remote Network Interaction; Use with the GNU General Public License.
 *
 * Notwithstanding any other provision of this License, if you modify the
 * Program, your modified version must prominently offer all users
 * interacting with it remotely through a computer network (if your version
 * supports such interaction) an opportunity to receive the Corresponding
 * Source of your version by providing access to the Corresponding Source
 * from a network server at no charge, through some standard or customary
 * means of facilitating copying of software.  This Corresponding Source
 * shall include the Corresponding Source for any work covered by version 3
 * of the GNU General Public License that is incorporated pursuant to the
 * following paragraph.
 *
 * Notwithstanding any other provision of this License, you have
 * permission to link or combine any covered work with a work licensed
 * under version 3 of the GNU General Public License into a single
 * combined work, and to convey the resulting work.  The terms of this
 * License will continue to apply to the part which is the covered work,
 * but the work with which it is combined will remain governed by version
 * 3 of the GNU General Public License.
 *
 * 14. Revised Versions of this License.
 *
 * The Free Software Foundation may publish revised and/or new versions of
 * the GNU Affero General Public License from time to time.  Such new versions
 * will be similar in spirit to the present version, but may differ in detail to
 * address new problems or concerns.
 *
 * Each version is given a distinguishing version number.  If the
 * Program specifies that a certain numbered version of the GNU Affero General
 * Public License "or any later version" applies to it, you have the
 * option of following the terms and conditions either of that numbered
 * version or of any later version published by the Free Software
 * Foundation.  If the Program does not specify a version number of the
 * GNU Affero General Public License, you may choose any version ever published
 * by the Free Software Foundation.
 *
 * If the Program specifies that a proxy can decide which future
 * versions of the GNU Affero General Public License can be used, that proxy's
 * public statement of acceptance of a version permanently authorizes you
 * to choose that version for the Program.
 *
 * Later license versions may give you additional or different
 * permissions.  However, no additional obligations are imposed on any
 * author or copyright holder as a result of your choosing to follow a
 * later version.
 *
 * 15. Disclaimer of Warranty.
 *
 * THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
 * APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
 * HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
 * OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
 * IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
 * ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
 *
 * 16. Limitation of Liability.
 *
 * IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
 * WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
 * THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
 * GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
 * USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
 * DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
 * PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
 * EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGES.
 *
 * 17. Interpretation of Sections 15 and 16.
 *
 * If the disclaimer of warranty and limitation of liability provided
 * above cannot be given local legal effect according to their terms,
 * reviewing courts shall apply local law that most closely approximates
 * an absolute waiver of all civil liability in connection with the
 * Program, unless a warranty or assumption of liability accompanies a
 * copy of the Program in return for a fee.
 */const R={undo:"U",redo:"I",deselect_all:"d",delete_all:"D",add_bookmark:"^",move_relation_to_front:"z",reduce_relations:"r",select_same_notes:"+",naturalize_note:"Z",copy:"C",paste:"V"},Ie={pan_left:"[",pan_right:"]",jump_to_next_bookmark:"{",jump_to_previous_bookmark:"}",jump_to_context_below:",",jump_to_context_above:".",toggle_palette:"-",switch_context_on_hover:!1},Lt={relation:"R",meta_relation:"M"},ri={context:{key:"c",colour:0},layer:{key:"l",colour:6},phrase:{key:"r",colour:2},section:{key:"t",colour:3}},si={repeat:{key:"e",colour:0},passing:{key:"p",colour:6},neighbour:{key:"n",colour:2},harmonic:{key:"i",colour:3},arpeggio:{key:"a",colour:4},urlinie:{key:"u",colour:5},bassbrechung:{key:"b",colour:5}},oi={passing_comb:{key:"P",total:"passing",outer:"arpeggio"},neighbour_comb:{key:"N",total:"neighbour",outer:"repeat"}},ai=["barLineAttr","fermata","rest","stem","flag","tie","artic","slur","dynam","tempo","tupletNum","dir","verse"],li=[],I=document.documentElement,ci=getComputedStyle(I),nt=()=>["INPUT","SELECT","TEXTAREA"].includes(document.activeElement.tagName),di=(t,e)=>{var n;return(n=e==null?void 0:e.every(i=>t==null?void 0:t.includes(i)))!=null?n:!1},ui=Object.freeze({shift:16,control:17,escape:27,left:37,right:39,a:65,h:72,s:83,x:88,z:90}),H=({keyCode:t},e)=>t===ui[e];function ue(t,e=null){const n=it(t);return e?di(n,[e].flat()):!!n.length}function it({metaKey:t,shiftKey:e,ctrlKey:n,altKey:i}){const r={meta:t,shift:e,ctrl:n,alt:i};return Object.keys(r).filter(s=>r[s])}const hi=/Macintosh/.test(navigator.userAgent)?"meta":"ctrl";function wt(t){let e=!1,n=Object.defineProperty({},t,{get:()=>{e=!0}});try{window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch{e=!1}return e}const gi=function({capture:t=!1,passive:e=!0,once:n=!1}={}){return mi.capture?{capture:t,passive:e,once:n}:t},mi={passive:wt("passive"),capture:wt("capture")},k=gi({capture:!0,passive:!1});let Te=null;const Ge={x:0,y:0};class fi{tick({x:e,y:n},i){Te||window.requestAnimationFrame(r=>{this.update(e,n);const s=Te;Te=null,s(Ge)}),Te=i}update(e,n){Ge.x=e,Ge.y=n}}const St=new fi,pi=100;let Bt=null;function yi(t,e=pi){clearTimeout(Bt),I.classList.add("resizing"),Bt=setTimeout(()=>{I.classList.remove("resizing"),t()},e)}const vi=t=>{var e;return(e=t==null?void 0:t.classList)==null?void 0:e.contains("note")},bi=t=>{var e;return(e=t==null?void 0:t.classList)==null?void 0:e.contains("relation")},Ei=t=>{var e;return t.tagName=="circle"&&((e=t.parentElement)==null?void 0:e.classList.contains("metarelation"))},Dt=t=>t.getAttribute("type");class _i{constructor(){this.content=document.getElementById("score-tooltip")}setContent(e){this.content.innerHTML=e}onMouseEnter({target:e}){var s;const n=bi(e),i=Ei(e);if(!n&&!i)return;const r=(s=Dt(e))!=null?s:Dt(e.parentElement);this.setContent(r)}}const Je=new _i;class Mi{constructor(e){this.app=e,this.init()}init(){window.addEventListener("resize",this.onResize.bind(this)),document.addEventListener("click",this.onTap.bind(this),k),document.addEventListener("mouseenter",this.onMouseEnter.bind(this),k),document.addEventListener("mousedown",this.onTapStart.bind(this),k),document.addEventListener("mousemove",this.onMouseMove.bind(this),k),document.addEventListener("mouseup",this.onTapEnd.bind(this),k),document.addEventListener("touchstart",this.onTapStart.bind(this),k),document.addEventListener("touchmove",this.onTouchMove.bind(this),k),document.addEventListener("touchend",this.onTapEnd.bind(this),k),document.addEventListener("keydown",this.onKeyDown.bind(this)),document.addEventListener("keyup",this.onKeyUp.bind(this)),document.addEventListener("change",this.onChange.bind(this),k),document.addEventListener("input",this.onInput.bind(this),k),document.addEventListener("submit",this.onSubmit.bind(this),k),document.addEventListener("undoredo",this.onUndoRedo.bind(this)),document.addEventListener("scoreload",this.onScoreLoad.bind(this)),document.addEventListener("scoreselection",this.onScoreSelection.bind(this))}onResize(){yi(()=>{var e,n;(e=this.app.viewport)==null||e.onResize(),(n=this.app.ui)==null||n.onResize()})}onTap(e){var n,i,r,s;(n=this.app.score)==null||n.onTap(e),(i=this.app.player)==null||i.onTap(e),(r=this.app.ui)==null||r.onTap(e),(s=this.app.history)==null||s.onTap(e)}onTapStart(e){var n;(n=this.app.ui)==null||n.onTapStart(e)}onTapEnd(){var e;(e=this.app.ui)==null||e.onTapEnd()}onMouseMove(e){St.tick(e,({x:n,y:i})=>{var r,s;(r=this.app.viewport)==null||r.onMouseMove(n,i),(s=this.app.ui)==null||s.onTapMove(n,i)})}onMouseEnter(e){Je==null||Je.onMouseEnter(e)}onTouchMove(e){const n={x:Math.round(e.touches[0].clientX),y:Math.round(e.touches[0].clientY)};St.tick(n,({x:i,y:r})=>{var s;(s=this.app.ui)==null||s.onTapMove(i,r)})}onChange(e){var n,i,r,s,o,a,d,l,c,g,u,h;(n=this.app.player)==null||n.onChange(e),(r=(i=this.app.ui)==null?void 0:i.filters)==null||r.onChange(e),(o=(s=this.app.ui)==null?void 0:s.mainMenu)==null||o.onChange(e),(d=(a=this.app.ui)==null?void 0:a.startScreen)==null||d.onChange(e),(g=(c=(l=this.app.ui)==null?void 0:l.selection)==null?void 0:c.mode)==null||g.onChange(e),(h=(u=this.app.ui)==null?void 0:u.layersMenu)==null||h.onChange(e)}onInput(e){var n,i;(i=(n=this.app.ui)==null?void 0:n.relationWidth)==null||i.onInput(e)}onSubmit(e){var n,i,r,s,o;(i=(n=this.app.ui)==null?void 0:n.relations)==null||i.onSubmit(e),(o=(s=(r=this.app.ui)==null?void 0:r.layersMenu)==null?void 0:s.jsonTree)==null||o.onSubmit(e)}onUndoRedo(e){var n;(n=this.app.history)==null||n.onUndoRedo(e)}onScoreLoad(e){var n,i,r;(n=this.app.score)==null||n.onScoreLoad(e),(i=this.app.ui)==null||i.onScoreLoad(e),(r=this.app.player)==null||r.reset(),this.app.ui.startScreen&&(this.app.ui.startScreen.destroy(),delete this.app.ui.startScreen)}onScoreSelection(e){var n,i;(n=this.app.score)==null||n.onScoreSelection(e),(i=this.app.ui)==null||i.onScoreSelection(e)}onKeyDown(e){if(!nt()){if(H(e,"z")){if(ue(e,["ctrl","shift"]))return this.app.history.redo();if(ue(e,"ctrl"))return this.app.history.undo()}if(H(e,"a")&&ue(e,hi))return this.app.ui.selection.selectAll();if(H(e,"control")&&it(e).length===1)return this.app.ui.newNote.enable();if(H(e,"shift")&&it(e).length===1)return this.app.ui.selection.mode.set("primary");if(!ue(e)){if(H(e,"h"))return this.app.ui.scoreSettings.toggleShades();if(H(e,"s"))return this.app.ui.scoreSettings.toggleStems();if(H(e,"x"))return this.app.ui.newNote.toggle()}}}onKeyUp(e){if(H(e,"control"))return this.app.ui.newNote.disable();if(H(e,"shift"))return this.app.ui.selection.mode.set("secondary");ue(e)||H(e,"escape")&&nt()&&document.activeElement.blur()}}var Ni=t=>new Mi(t);const me=(t,e=null)=>{const n={},i=t.getBoundingClientRect();for(const r in i)(!e||e.includes(r))&&(n[r]=i[r]);return n};class rt{}U(rt,"isElement",e=>e.nodeType==1);const $t=(t,e)=>{Object.entries(e).forEach(([n,i])=>{if(i==null)return t.removeAttribute(n);t.setAttribute(n,i)})},ve=(t,e,n)=>Math.max(e,Math.min(n,t)),be=(t,e=0)=>(e=10**e,Math.round(t*e)/e);class Ai{constructor(e=""){this.ctn=document.getElementById(`${e}-progress-ctn`),this.el=document.getElementById(`${e}-progress`),this.doneEl=document.getElementById(`${e}-progress-done`),this.maxEl=document.getElementById(`${e}-progress-max`),this.reset()}update(e=this.done,n=this.max){if(n<=0)return this.reset();this.done=e,this.max=n,this.el.max=n,this.el.value=e,this.el.innerHTML=`${e} / ${n}`;const i=be(this.el.position,3);this.setBar(i),this.updateLabel()}setBar(e){this.ctn.style.setProperty("--progress",ve(0,e,1))}updateLabel(){this.doneEl.innerHTML=this.formatTime(this.done),this.maxEl.innerHTML=this.formatTime(this.max)}formatTime(e){e=be(e);const n=Math.floor(e/60);return e=e%60,`${kt(n)}:${kt(e)}`}reset(){this.el.innerHTML="",this.el.removeAttribute("value"),this.el.removeAttribute("max"),this.setBar(0),this.done=0,this.max=0}}const kt=(t,e=2)=>t.toString().padStart(e,"0"),Ct=new AudioContext;let z;class Ii{constructor(){this.midiId=null,this.playhead=0,this.instrument,this.status="paused",this.activeNotes={},this.ctn=document.getElementById("player"),this.playPauseBtn=document.getElementById("player-play-pause"),this.stopBtn=document.getElementById("player-stop"),this.timelineRange=document.getElementById("player-timeline-input"),this.init()}loadSound(e,n=""){this.midiId!=n&&(this.stop(),this.midiId=n),z.loadDataUri(`data:audio/midi;base64,${e}`)}onTap({target:e}){if(e==this.playPauseBtn){if(z.isPlaying())return this.pause();const n=po();return this.midiId!="original"&&this.loadSound(n,"original"),this.play()}e==this.stopBtn&&this.status!="stopped"&&this.stop()}onChange({target:e}){e==this.timelineRange&&z.skipToSeconds(e.value).play()}updateProgress(){let e=z.getSongTime(),n=z.getSongTimeRemaining();(isNaN(e)||isNaN(n))&&(e=0,n=0),n=ve(n,0,e);const i=be(e-n,2);this.progressBar.update(i,e),this.timelineRange.setAttribute("max",e),this.timelineRange.setAttribute("value",i)}play(){this.playhead&&z.skipToTick(this.playhead),z.play(),this.updateControls("playing")}stop(){z.stop(),this.instrument.stop(),this.updateProgress(),this.playhead=0,this.updateControls("stopped")}pause(){this.playhead=z.getCurrentTick(),this.instrument.stop(),z.pause(),this.updateControls("paused")}updateControls(e){this.status=e;let n=e=="playing"?"Pause":"Play";n=this.playPauseBtn.dataset[`label${n}`],$t(this.playPauseBtn,{title:n,ariaLabel:n}),["stopped","playing","paused"].forEach(i=>this.ctn.classList.toggle(`player--${i}`,e==i))}init(){Xn.instrument(Ct,"./instruments/acoustic-grand-piano-mp3.js").then(e=>{this.instrument=e,z=new Kn.Player(n=>{var r;const i=n.noteName+n.track;n.name=="Note on"&&n.velocity>0?this.activeNotes[i]=e.play(n.noteNumber,Ct.currentTime,{gain:n.velocity/127}):(n.name=="Note off"||n.name=="Note on"&&n.velocity==0)&&((r=this.activeNotes[i])==null||r.stop()),this.updateProgress()}),z.on("endOfFile",()=>this.stop())}),this.updateControls("stopped"),this.progressBar=new Ai("player")}reset(){this.stop(),this.midiId=null,this.activeNotes={}}}const st=new Ii;class Ti{constructor(){this.ctn=document.getElementById("start-screen"),this.filePicker=document.getElementById("start-screen-score-file-picker"),this.init()}init(){document.getElementById("start-screen-loading-spinner").remove()}onChange(e){e.composedPath().includes(this.filePicker)&&Vn(e)}destroy(){this.ctn.addEventListener("transitionend",this.ctn.remove,{once:!0}),this.ctn.classList.add("start-screen--out")}}const xi=new Ti;class Li{constructor(){this.visible=!1,this.ctn=document.getElementById("main-menu"),this.toggleBtn=document.getElementById("main-menu-toggle"),this.filePicker=document.getElementById("score-file-picker"),this.saveFile=document.getElementById("save-file"),this.saveAsSvg=document.getElementById("save-file-svg")}onTap({target:e}){if(e==this.toggleBtn)return this.toggle();if(e==this.saveFile)return ho();e==this.saveAsSvg&&go()}onChange(e){e.composedPath().includes(this.filePicker)&&(Vn(e),this.toggle(!1))}toggle(e=!this.visible){this.visible=e,this.ctn.classList.toggle("fly-out--expanded",e),this.ctn.classList.toggle("fly-out--collapsed",!e)}}const wi=new Li,ct=t=>t[0].toUpperCase()+t.slice(1);var ot=function(t,e){return[t*e[0],t*e[1]]},re=function(t,e){return[t[0]+e[0],t[1]+e[1]]},Yt=function(t,e){var n=[t[1]-e[1],e[0]-t[0]],i=Math.sqrt(n[0]*n[0]+n[1]*n[1]);return[n[0]/i,n[1]/i]},Qt=function(t,e){const n=[t[0][0],t[0][1]-e],i=[t[0][0],parseInt(t[0][1])+parseInt(e)];return`M ${n} A `+[e,e,"0,0,0",i].join(",")+" A "+[e,e,"0,0,0",n].join(",")},Ht=function(t,e){var n=ot(e,Yt(t[0],t[1])),i=ot(-1,n),r=re(t[0],n),s=re(t[1],n),o=re(t[1],i),a=re(t[0],i);return`M ${r} L ${s} A `+[e,e,"0,0,0",o].join(",")+` L ${a} A `+[e,e,"0,0,0",r].join(",")},Si=function(t,e){if(!t||t.length<1)return"";if(t.length===1)return Qt(t,e);if(t.length===2)return Ht(t,e);for(var n=new Array(t.length),i=0;i<n.length;++i){var r=i===0?t[t.length-1]:t[i-1],s=t[i],o=ot(e,Yt(r,s));n[i]=[re(r,o),re(s,o)]}var a="A "+[e,e,"0,0,0,"].join(",");return n=n.map(function(d,l){var c="";if(l===0)var c="M "+n[n.length-1][1]+" ";return c+=a+d[0]+" L "+d[1],c}),n.join(" ")};function Vt(t){var e=V(),n=e.hullPadding||200,i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.style.setProperty("--shade-alternate",Bi()),t.length==1?i.setAttribute("d",Qt(t,n)):t.length==2?i.setAttribute("d",Ht(t,n)):i.setAttribute("d",Si(ei(t),n)),i}function Bi(){const t="456789AB";let e="#";for(let n=0;n<6;n++)e+=t[Math.floor(Math.random()*t.length)];return e}function Pt(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","line");return n.setAttribute("x1",t[0]),n.setAttribute("y1",t[1]),n.setAttribute("x2",e[0]),n.setAttribute("y2",e[1]),n.style.stroke="#000",n.style.strokeWidth="15px",n}function Ft(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","circle");return n.setAttribute("cx",t[0]),n.setAttribute("cy",t[1]),n.setAttribute("r",e),n.style.stroke="#000",n.style.strokeWidth="15px",n}function Di(t,e,n){var i=document.createElementNS("http://www.w3.org/2000/svg","rect");return i.setAttribute("x",t[0]),i.setAttribute("y",t[1]),i.setAttribute("width",e),i.setAttribute("height",n),i.style.stroke="#000",i.style.fill="white",i.style.strokeWidth="15px",i}function qt(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","text");return e&&(n.setAttribute("x",e[0]),n.setAttribute("y",e[1])),n.append(t),n}function ki(t,e,n,i=0){var r=document.createElementNS("http://www.w3.org/2000/svg","tspan");return r.setAttribute("x",e[0]),r.setAttribute("dx",i),r.setAttribute("dy",n),r.append(t),r}function Oe(t){t.parentElement.prepend(t)}function Ue(t,e){var n=t.getElementsByClassName("system")[0],i=n.parentNode;i.insertBefore(e,n)}function Be(){var t=document.createElementNS("http://www.w3.org/2000/svg","g");return t}function dt(t=5){return Math.floor(Math.random()*(1<<t*4)).toString(16)}function De(t,e){var n=qe();return n.getMIDIValuesForElement(E(t)).pitch-n.getMIDIValuesForElement(E(e)).pitch}function ke(t,e){var n=qe();return n.getMIDIValuesForElement(E(t)).time-n.getMIDIValuesForElement(E(e)).time}function Ci(t){var e=t;e=e.sort(De),e=e.sort(ke);var n=e.map(i=>({p_off:De(i,e[0]),t_off:ke(i,e[0]),n_from:i}));return n}function ji(t,e,n,i){for(var r=t.closest("measure"),s=[];r;){let o=!0,a=r.querySelectorAll("note");for(let d of a){let l=ke(d,t);if(l>=0&&l<=i){console.log("in time");let c=De(d,t);c>=e&&c<=n&&(console.log("in pitch"),o=!1,s.push(d))}}o?r=null:r=Wt(r)}return s}function Wt(t){return t.nextElementSibling&&t.nextElementSibling.tagName=="measure"?t.nextElementSibling:t.nextElementSibling?Wt(t.nextElementSibling):null}function C(t){return[t.getElementsByTagName("use")[0].x.animVal.value+100,t.getElementsByTagName("use")[0].y.animVal.value]}function Zt(t,e){e[0]=="#"&&(e=e.slice(1));var n=t.querySelectorAll("[*|oldid='"+e+"']");return n?Array.from(n):Array.from(t.all).find(i=>i.getAttribute("oldid")==e)}function y(t,e){if(!e)return null;e[0]=="#"&&(e=e.slice(1));var n=t.querySelector("[*|id='"+e+"']");return n||Array.from(t.getElementsByTagName("*")).find(i=>i.getAttribute("id")==e||i.getAttribute("xml:id")==e)}const Ce=t=>{var e;return(e=t.getAttribute("oldid"))!=null?e:t.id};function E(t){if(document.contains(t))return t.hasAttribute("oldid")?E(document.getElementById(t.getAttribute("oldid"))):t.id;if(t.hasAttribute("xml:id")){if(t.hasAttribute("sameas"))return E(y(mei,t.getAttribute("sameas")));if(t.hasAttribute("corresp"))return E(y(mei,t.getAttribute("corresp")));if(t.hasAttribute("copyof"))return E(y(mei,t.getAttribute("copyof")));if(t.hasAttribute("xml:id"))return t.getAttribute("xml:id")}}function B(t,e){if(!!e){e[0]=="#"&&(e=e.slice(1));var n=zi(t.layer,e),i=document.getElementById(n);if(t.svg_elem.contains(i))return n;if(n)return t.id_prefix+n}}function zi(t,e){e[0]=="#"&&(e=e.slice(1));var n=t.id_mapping.find(i=>i[1]==e);return n?n[0]:e}function Oi(t){return console.debug("Using global: mei to find element"),Array.from(mei.getElementsByTagName("arc")).filter(e=>e.getAttribute("from")=="#"+t||e.getAttribute("to")=="#"+t).length>0}function j(t){return t.getElementsByTagName("label")[0].children.length==0?t.getAttribute("xml:id"):t.getElementsByTagName("label")[0].getElementsByTagName("note")[0].getAttribute("corresp").replace("#","")}function Ui(t,e){return(t%e+e)%e}function Gt(t,e){return(t+e)/2}function Ri(t){if(console.debug("Using globals: document, mei to find element"),document.contains(t)&&(t=y(mei,E(t))),t.hasAttribute("accid.ges"))return t.getAttribute("accid.ges");if(t.hasAttribute("accid"))return t.getAttribute("accid");if(t.children.length==0)return"";var e=t.getElementsByTagName("accid");if(e.length==0)return"";var n=e[0];return n.hasAttribute("accid.ges")?n.getAttribute("accid.ges"):n.hasAttribute("accid")?n.getAttribute("accid"):""}function $i(t){var e=O();t=y(mei,E(t));var n=Re(e,t),i=n.map(j).map(r=>y(mei,r));return i}function Jt(t){var e=O();t=y(mei,E(t));var n=$e(e,t),i=n.map(j).map(o=>y(mei,o)),r=W(e,t),s=r.map(j).map(o=>y(mei,o));return[i,s]}function Re(t,e){var n=Array.from(t.getElementsByTagName("arc")),i=[];return n.forEach(r=>{r.getAttribute("from")=="#"+e.getAttribute("xml:id")&&i.push(y(t.getRootNode(),r.getAttribute("to")))}),i}function $e(t,e){var n=Array.from(t.getElementsByTagName("arc")),i=[];return n.forEach(r=>{r.getAttribute("from")=="#"+e.getAttribute("xml:id")&&r.getAttribute("type")=="primary"&&i.push(y(t.getRootNode(),r.getAttribute("to")))}),i}function W(t,e){var n=Array.from(t.getElementsByTagName("arc")),i=[];return n.forEach(r=>{r.getAttribute("from")=="#"+e.getAttribute("xml:id")&&r.getAttribute("type")=="secondary"&&i.push(y(t.getRootNode(),r.getAttribute("to")))}),i}function ut(t){return t.children.length==0?"":t.children[0].getAttribute("type")}function jt(t,o){var n=E(o),i=E(y(mei,n)),r=y(t.getRootNode(),"gn-"+i);if(r!=null)return r;r=t.getRootNode().createElement("node");var s=t.getRootNode().createElement("label"),o=t.getRootNode().createElement("note");return o.setAttribute("corresp","#"+i),r.appendChild(s),s.appendChild(o),r.setAttribute("xml:id","gn-"+i),t.appendChild(r),r}function Yi(t,e){var n=y(t.svg_elem.getRootNode(),B(t,j(e)));return n&&t.svg_elem.contains(n)&&n.classList.add("hidden"),n}function Qi(t,e){var n=y(t.svg_elem.getRootNode(),"hier"+B(t,j(e)));return n&&t.svg_elem.contains(n)&&n.classList.add("hidden"),n}function Hi(t,e){var n=y(t.svg_elem.getRootNode(),t.id_prefix+e.getAttribute("xml:id"));return n&&t.svg_elem.contains(n)&&n.classList.add("hidden"),n}function Vi(t,e){var n=y(t.svg_elem.getRootNode(),"hier"+t.id_prefix+e.getAttribute("xml:id"));return n&&t.svg_elem.contains(n)&&n.classList.add("hidden"),n}function Pi(t){if(!t){console.log("Not a note");return}if(t.classList.contains("secondarynote")){var e=getComputedStyle(t).getPropertyValue("--how-secondary");t.style.setProperty("--how-secondary",e*2)}else t.classList.add("secondarynote"),t.style.setProperty("--how-secondary",2)}function Fi(t){if(!t){console.log("Not a note");return}var e=getComputedStyle(t).getPropertyValue("--how-secondary");t.style.setProperty("--how-secondary",e/2),e/2==1&&t.classList.remove("secondarynote")}function ht(t,e,n){t.svg_elem,n.tagName!="node"&&(n=y(e.getRootNode(),n.id));var i=W(e,n);i.forEach(r=>{var s=document.getElementById(B(t,j(r)));Pi(s)})}function gt(t,e,n){t.svg_elem,n.tagName!="node"&&(n=y(e.getRootNode(),n.id));var i=W(e,n);i.forEach(r=>{var s=document.getElementById(B(t,j(r)));Fi(s)})}function Xt(t){return t.tagName=="measure"?t:Xt(t.parentElement)}function qi(){if(console.debug("Using globals: document, mei to find elems"),(selected.length==1||extraselected.length==1)&&!(selected.length==1&&extraselected.length==1)){var t;selected.length==1?t=selected[0]:t=extraselected[0];var e=y(mei,t.getAttribute("id")),n=Xt(e),i=Array.from(n.getElementsByTagName("note"));i.forEach(r=>{r.getAttribute("oct")==e.getAttribute("oct")&&r.getAttribute("pname")==e.getAttribute("pname")&&b(y(document,r.getAttribute("xml:id")))}),b(t,!0)}}function Z(t){return typeof t=="undefined"?!1:t.classList.contains("note")?"note":t.classList.contains("relation")?"relation":t.classList.contains("metarelation")?"metarelation":""}function Wi(t){var e=t.getBBox();return[e.x+e.width/2,e.y+e.height/2]}function Zi(t){if(t.classList.contains("metarelation")){var e=t.getElementsByTagName("circle")[0];return[e.cx.baseVal.value,e.cy.baseVal.value]}else return t.classList.contains("relation")?Wi(t):(console.log("wtf"),console.log(t),[0,0])}function Kt(t){return t.reduce((e,n)=>e+n,0)/t.length}function en(t){var e=y(mei,t);if(e.tagName=="node")return e.children[0].getAttribute("type");var n=Ri(e);return n=n.replace(/s/g,"#"),n=n.replace(/f/g,"b"),n=n.replace(/n/g,""),e.getAttribute("pname")+n+e.getAttribute("oct")}function Gi(t){if(t.length==0)return"";if(t[0].classList.contains("note"))return t.sort((e,n)=>{const[i,r]=C(e),[s,o]=C(n);return i-s==0?o-r:i-s}),t.map(e=>en(E(e)))}function Ji(t){return Array.from(t.getElementsByTagName("node")).forEach(e=>{e.getAttribute("type")=="hyperedge"&&e.setAttribute("type","relation"),e.getAttribute("type")=="metaedge"&&e.setAttribute("type","metarelation")}),t}function tn(t){Array.from(t.children).forEach(tn);let e=t.hasAttribute("sameas")?"sameas":t.hasAttribute("copyof")?"copyof":"";e&&(t.closest("graph")||t.closest("eTree")||y(mei,t.getAttribute(e)).closest("score")!=t.closest("score"))&&(t.setAttribute("corresp",t.getAttribute(e)),t.removeAttribute(e))}function Xi(t){Array.from(t.getElementsByTagName("mdiv")).forEach(e=>{let n=/(\d+)-.*/,i=/-sliced$/,r=Array.from(e.children).filter(o=>o.tagName=="score");if(r.length>1){let o=e.getAttribute("xml:id");for(let a in r){if(a==0)continue;let d=r[a],l=d.getAttribute("xml:id");if(n.test(l)){let c=n.exec(l)[1];var s=t.createElement("mdiv");i.test(l)?s.setAttribute("xml:id",c+"-"+o+"-sliced"):s.setAttribute("xml:id",c+"-"+o),e.parentElement.append(s),s.append(d)}}}})}var Ye=["dur","n","dots","when","layer","staff","tstamp.ges","tstamp.real","tstamp","loc","dur.ges","dots.ges","dur.metrical","dur.ppq","dur.real","dur.recip","beam","fermata","tuplet"];function Ki(t,e){var n=t.createElementNS("http://www.music-encoding.org/ns/mei","rest");n.setAttribute("xml:id","rest-"+e.getAttribute("xml:id"));for(let i of Ye)e.hasAttribute(i)&&n.setAttribute(i,e.getAttribute(i));return n}function er(t,e){var n=t.createElementNS("http://www.music-encoding.org/ns/mei","space");n.setAttribute("xml:id","space-"+e.getAttribute("xml:id"));for(let i of Ye)e.hasAttribute(i)&&n.setAttribute(i,e.getAttribute(i));return n}function tr(t,e){var n=t.createElementNS("http://www.music-encoding.org/ns/mei","chord");n.setAttribute("xml:id","chord-"+e.getAttribute("xml:id"));for(const i of Ye)e.hasAttribute(i)&&n.setAttribute(i,e.getAttribute(i));return n}function nr(t,e){var n=t.createElementNS("http://www.music-encoding.org/ns/mei","space");n.setAttribute("xml:id","space-"+e.getAttribute("xml:id"));for(let i of Ye)e.hasAttribute(i)&&n.setAttribute(i,e.getAttribute(i));return n}function mt(t,e){t.id&&(t.setAttribute("oldid",t.id),t.id=e+t.id),t.getAttribute("xml:id")&&t.setAttribute("xml:id",e+t.getAttribute("xml:id")),t.getAttribute("startid")&&t.setAttribute("startid",e+t.getAttribute("startid")),t.getAttribute("endid")&&t.setAttribute("endid",e+t.getAttribute("endid")),Array.from(t.children).forEach(n=>mt(n,e))}function ir(t){var e=t.implementation.createDocument(t.namespaceURI,null,null),n=e.importNode(t.documentElement,!0);return e.appendChild(n),e}function je(t){var e;return t.id?e=[t.id,E(t)]:t.hasAttribute("xml:id")&&(e=[t.getAttribute("xml:id"),E(t)]),e?[e].concat(Array.from(t.children).flatMap(je)):Array.from(t.children).flatMap(je)}function nn(){var t=document.getElementById("layers"),e=document.createElement("div");return e.id="layer"+t.children.length,e.classList.add("layer"),e.classList.add("layer-new-ui"),t.appendChild(e),e}function rn(t){var e=V(),n=document.createElement("div");n.id="view"+e.length,n.classList.add("view");var i=document.createElement("div");return i.id="svg"+e.length,i.classList.add("svg_container"),n.appendChild(i),t.appendChild(n),[n,i]}function rr(t){var e=t;return li.forEach(n=>{Array.from(t.getElementsByTagName(n)).forEach(i=>{i.parentNode.removeChild(i)})}),e}function sr(t,e,n){var i=O(),r=e.map(a=>a.getAttribute("id").replace(/(^\d+-?)/,"gn-")).sort((a,d)=>a<d),s=n.map(a=>a.getAttribute("id").replace(/(^\d+-?)/,"gn-")).sort((a,d)=>a<d),o=Array.from(i.querySelectorAll("[type='relation']")).filter(a=>a.children[0].getAttribute("type")==t);return o.forEach(a=>{var d=Jt(a),l=d[0],c=d[1];if(l=l.map(g=>g.getAttribute("xml:id")).sort((g,u)=>g<u),c=c.map(g=>g.getAttribute("xml:id")).sort((g,u)=>g<u),JSON.stringify(r)==JSON.stringify(l)&&JSON.stringify(s)==JSON.stringify(c))return alert(`Warning: This relation already exists.
Creating a duplicate anyway.`),!1}),!0}function ft(t){return V().find(e=>e.svg_elem.contains(t))}function sn(t,e,n){var i=e.map(s=>$e(t,s)).flat();e=e.filter(s=>!n.includes(s)),i=i.concat(e.map(s=>W(t,s)).flat());do{var r=n.filter(s=>W(t,s).findIndex(o=>i.includes(o))>-1);e=e.concat(r),n=n.filter(s=>!r.includes(s)),i=i.concat(r.map(s=>W(t,s)).flat())}while(r.length>0);return[n,[...new Set(n.flatMap(s=>W(t,s)))]]}function on(t){var e=O();or(t,e,selected,extraselected)}function or(t,e,n,i){var r=n.concat(i),s=r.map(u=>y(e.getRootNode(),E(u))),o=Array.from(e.getElementsByTagName("node")).filter(u=>u.getAttribute("type")=="relation"),a=o.filter(u=>{var h=y(document,t.id_prefix+u.getAttribute("xml:id"));return h!=null&&!h.classList.contains("hidden")});s.length==0&&(s=a);var[d,l]=sn(e,a,s),c=[];c.push(d.map(u=>Hi(t,u))),c.push(l.map(u=>Yi(t,u))),c.push(d.map(u=>Vi(t,u))),c.push(l.map(u=>Qi(t,u)));var g=[d,l,c];t.reductions.push(["reduce",g,n,i])}function ar(t){console.log("Using globals: selected/extraselected");var e=t.reductions;if(e.length==0){console.log("Nothing to unreduce");return}selected.forEach(l=>b(l,!1)),extraselected.forEach(l=>b(l,!0));var[n,i,r,s]=e.pop(),[o,a,d]=i;d.flat().forEach(l=>{l&&l.classList.remove("hidden")}),r.forEach(l=>b(l,!1)),s.forEach(l=>b(l,!0))}function lr(t,e,n=!0){var i=O(),r=[],s=e,o=t.filter(l=>l!=null);do{let l=[];n&&(l=o.filter(c=>!s.find(g=>Re(i,g).includes(c))));var[a,d]=sn(i,s,s);l=l.concat(d.filter(c=>o.includes(c))),r.push(l),o=o.filter(c=>!l.includes(c)),s=s.filter(c=>!a.includes(c))}while(d.length+a.length>0);return r.push(o),r}function an(t,e=200,n=!0){var i=t.svg_elem,r=t.id_prefix;bt(t);var s=Be();s.id="hier"+r;var o=Array.from(i.getElementsByClassName("note")).map(E).map(h=>y(mei,h)).map(E).map(h=>y(mei,"gn-"+h)).filter(h=>h!=null),a=Array.from(i.getElementsByClassName("relation")).map(E).map(h=>y(mei,h)),d=lr(o,a,n),l=0,c=500,g=d.flatMap((h,m)=>h.map(p=>{let f=document.getElementById(B(t,j(p))),[L,T]=C(f);return[p,[L,l-c*m]]})),u={};g.forEach(([h,m])=>{let p=e<100?50:e/2,f=p<100?200:p>200?400:p*2,L=j(h),T=u[m],v,N=[m[0]+p+10,m[1]+p+25-f];if(T)v=T.getElementsByTagName("text")[0];else{T=Be();let A=Ft(m,p);T.appendChild(A),T.id="hier"+r+L,v=qt("",N),v.style.fontFamiy="sans-serif",v.style.fontSize=f+"px",v.classList.add("nodetext"),T.appendChild(v),s.appendChild(T),u[m]=T}let Q=ki(en(L),N,f);v.appendChild(Q)}),a.forEach(h=>{let m=r+h.getAttribute("xml:id"),p=ut(h),f=document.getElementById(m),T=Re(O(),h).map(N=>g.find(Q=>Q[0]==N)[1]),v=Vt(T);v.setAttribute("id","hier"+m),r!=""&&v.setAttribute("oldid",s.getAttribute("xml:id")),v.classList.add("relation"),v.setAttribute("type",p),X(v),ce.ui.scoreSettings.brightShades||X(v),v.onclick=N=>b(f),v.onmouseover=function(){f.classList.add("relationhover"),f.onmouseover()},v.onmouseout=function(){f.classList.remove("relationhover"),f.onmouseout()},v.addEventListener("wheel",N=>{N.preventDefault(),Oe(N.target),N.target.onmouseout()},k),s.appendChild(v)}),Ue(i,s),wn(t,d.length*c)}var $={};function cr(){let t=selected.concat(extraselected);if(t.length==0||!t[0].classList.contains("relation")){console.log("No relation selected");return}let e=t.flatMap(i=>$i(y(mei,E(i))));$={template:Ci(e),rels:t}}function dr(){if(!$){console.log("No copy to paste");return}let t=selected.concat(extraselected);if(t.length!=1||!t[0].classList.contains("note")){console.log("Pasting requires selecting a single note, for now.");return}let e=y(mei,E(t[0])),n=$.template.map(l=>l.p_off);n=n.sort((l,c)=>l-c);let i=ji(e,n[0],n[n.length-1],$.template[$.template.length-1].t_off);$.template.forEach(l=>l.n_to=void 0);for(var r of i){let l=ke(r,e),c=De(r,e);for(var s of $.template)if(l==s.t_off&&c==s.p_off){if(s.n_to!=null){console.log("Template mismatch: Found two matching notes: ",s,r);return}s.n_to=r}}for(var o of $.template)if(o.n_to==null){console.log("Template mismatch: No matching note found: ",o);return}const a=ft(t[0]);b(t[0]);for(var d of $.rels){let l=y(mei,E(d)),[c,g]=Jt(l);for(let u of c){let h=$.template.find(p=>p.n_from==u),m=y(document,B(a,E(h.n_to)));b(m,!0)}for(let u of g){let h=$.template.find(p=>p.n_from==u),m=y(document,B(a,E(h.n_to)));b(m)}K(d.getAttribute("type"))}}function ur(t){console.debug("Using globals: mei for element selection");var e=E(t),n=y(mei,e),i=[],r=Z(t)=="metarelation",s=O(),o=V();for(const c of o){let g=y(document,c.id_prefix+e);g&&(i.push(g),r||gt(c,s,n))}var a=Array.from(mei.getElementsByTagName("arc")).filter(c=>c.getAttribute("to")=="#"+t.id||c.getAttribute("from")=="#"+t.id),d=a.concat(i);d.push(n);var l=d.map(c=>{var g=[c,c.parentElement,c.nextSibling];try{document.querySelector(`g #${c.getAttribute("to").substring(4)}`).setAttribute("class","note")}catch{}return c.parentElement.removeChild(c),g});return l}function pt(t=!1){console.debug("Using globals: selected for element selection, undo_actions for storing the action");var e=selected.concat(extraselected);if(e.length==0||!(Z(e[0])=="relation"||Z(e[0])=="metarelation")){console.log("No (meta)relation selected!");return}var n=e.flatMap(ur),i=We();i.push(["delete relation",n.reverse(),selected,extraselected]),e.forEach(b),t||Qe()}function ln(){console.debug("Using globals: undo_actions, selected, extraselected, mei, rerendered_after_action");var t=We();if(t.length==0){console.log("Nothing to undo");return}if(t.length==bo()){console.log("Cannot undo past a rerender"),alert("Cannot undo past a rerender.");return}selected.forEach(h=>b(h,!1)),extraselected.forEach(h=>b(h,!0));var e=V(),n=At();const[i,r,s,o]=t.pop();if(i=="edges"||i=="relation"||i=="metarelation"){var a=r;let h,m,p=a.flat().find(f=>f.tagName=="node"&&f.getAttribute("type")==i);if(p)h=p.getAttribute("xml:id"),p.children.length>0&&(m=p.children[0].getAttribute("type"));else{console.log("Could not find graph element of (meta)relation to undo: ",r);return}if(i=="relation")for(const f of e)gt(f,O(),p);a.flat().forEach(f=>{Oi(f.getAttribute("xml:id"))||f.parentNode.removeChild(f)}),Array.from(document.querySelectorAll('[oldid="'+h+'"]')).forEach(f=>f.parentNode.removeChild(f)),s.forEach(f=>b(document.getElementById(f.id),!1)),o.forEach(f=>b(document.getElementById(f.id),!0)),n.push([i,[m,h],s,o])}else if(i=="delete relation"){var d=r;d.forEach(h=>{h[1].insertBefore(h[0],h[2]);let m=e.find(f=>f.svg_elem.contains(h[0])),p=Z(h[0])=="relation";if(m&&p){let f=E(h[0]),L=y(mei,f);ht(m,O(),L)}}),s.forEach(h=>b(h,!1)),o.forEach(h=>b(h,!0)),n.push([i,[],s,o])}else if(i=="change relation type"){var l=r;let h=r[0][1];s.concat(o).forEach(m=>{var[p,f]=l.pop(),L=Ce(m),T=[y(document,L)].concat(Zt(document,L));T.forEach(N=>N.setAttribute("type",p));var v=y(mei,L);v.getElementsByTagName("label")[0].setAttribute("type",p),T.forEach(X)}),s.forEach(m=>b(m,!1)),o.forEach(m=>b(m,!0)),n.push([i,h,s,o])}else if(i=="add note"){var[c,g]=r;g.forEach(L=>L.parentNode.removeChild(L));let h=c[0].getAttribute("pname"),m=c[0].getAttribute("oct"),p=c[0].getAttribute("xml:id"),f=s[0];if(c[0].parentNode.removeChild(c[0]),c.length>1){var u=c[1];u.parentNode.insertBefore(u.children[0],u),u.parentNode.removeChild(u)}n.push([i,[h,m,f,p],s,o])}yt()}function Qe(){vo([]),yt()}function cn(){var t=At();if(t.length==0){console.log("Nothing to redo");return}selected.forEach(a=>b(a,!1)),extraselected.forEach(a=>b(a,!0));const[e,n,i,r]=t.pop();i.forEach(a=>b(document.getElementById(a.id),!1)),r.forEach(a=>b(document.getElementById(a.id),!0));let s,o;switch(e){case"relation":[s,o]=n,K(s,o,!0);break;case"metarelation":[s,o]=n,Nt(s,o,!0);break;case"change relation type":s=n,K(s,"",!0);break;case"delete relation":pt(!0);break;case"add note":let[a,d,l,c]=n;hn(a,d,l,c,!0),b(i[0]);break}yt()}function yt(){document.dispatchEvent(new CustomEvent("undoredo",{detail:{redoAbleCount:At().length,undoAbleCount:We().length}}))}var at="cdefgab";function hr(){var t=_(),e=t.svg_elem.children[0],n=t.svg_elem.getElementsByClassName("system")[0],i=e.createSVGPoint();return i.x=Fr(),i.y=qr(),i.matrixTransform(n.parentElement.getScreenCTM().inverse())}function gr(t){let e=t.svg_elem;var n=Array.from(e.getElementsByClassName("measure"));n.length&&Array.from(n[0].getElementsByClassName("staff")),Array.from(e.getElementsByClassName("note"));var i=n.map(r=>[r.getBBox().x+r.getBBox().width,r]);return i.sort((r,s)=>r[0]-s[0]),i}function mr(t,e){let n=t.measure_map.find(i=>i[0]>e.x);if(n)return n[1]}function Se(t){let e=t.children[2].getBBox();return e.y+e.height/2}function fr(t){let e=t.children[2].getBBox(),n=t.children[1].getBBox();return Math.abs(e.y-n.y)}function pr(t,e,n){var i=Array.from(n.getElementsByClassName("staff")),r=i.map(a=>[Se(a),a]);r.sort((a,d)=>a[0]-d[0]);var s=r.findIndex(a=>e.y<a[0]);if(s==0)return r[0][1];if(s==-1)return r[r.length-1][1];const o=Gt(r[s-1][0],r[s][0]);return e.y<o?r[s-1][1]:r[s][1]}function yr(t){var e=y(mei,E(t)),n=e.getAttribute("pname"),i=e.getAttribute("oct");return i*7+at.indexOf(n)}function vr(t){const e=Se(t),i=-Math.abs(fr(t))/2,r=t.getElementsByClassName("note");var s;if(r.length>0)s=r[0];else{const a=t.closest(".system"),l=Array.from(a.getElementsByClassName("staff")).find(c=>Se(c)==e&&c.getElementsByClassName("note").length>0);l&&(s=l.getElementsByClassName("note")[0])}var o;if(console.log(s),s)o=yr(s)-Math.floor((C(s)[1]-e)/i);else{const a=t.closest(".system"),c=Array.from(a.getElementsByClassName("staff")).find(h=>Se(h)==e&&h.getElementsByClassName("clef").length>0).getElementsByClassName("clef")[0],g=c.children[0].getAttribute("y");let u;switch(c.children[0].getAttribute("xlink:href")){case"E062":u=24;break;case"E052":u=25;break;case"E050":u=32;break}o=u-Math.floor((g-e)/i)}return[a=>{var d=Math.floor((a+i/2-e)/i)+o,l=Math.floor(d/7),c=at[Ui(d,7)];return[c,l]},(a,d)=>{var l=d*7+at.indexOf(a);return e+(l-o)*i}]}function br(t,e,n){return n.getElementsByClassName("note")[0],n.y_to_p(e.y)}function Er(t,e,n){var i=Array.from(n.getElementsByClassName("note")).map(o=>[C(o)[0],o]);if(i.length==0)return null;i.sort((o,a)=>o[0]-a[0]);var r=i.findIndex(o=>e.x<o[0]);if(r==0)return i[0][1];if(r==-1)return i[i.length-1][1];const s=Gt(i[r-1][0],i[r][0]);return e.x<s?i[r-1][1]:i[r][1]}function vt(){var t=_(),e=t;const n=hr(),i=mr(e,n);if(!i)return console.log("Pointer outside measures"),[null,null,null];const r=pr(e,n,i),[s,o]=br(e,n,r),a=Er(e,n,r);return a?[s,o,a]:[null,null,null]}function dn(t,e,n){var i=n.closest(".staff");return i.getElementsByClassName("note")[0],[C(n)[0],i.p_to_y(t,e)]}function un(t,e,n,i=!0,r=""){var s=document.getElementById(r);if(s&&s.parentElement.removeChild(s),i){let[a,d]=dn(t,e,n),[l,c]=C(n);var o=document.createElementNS("http://www.w3.org/2000/svg","use");o.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+n.id),o.setAttribute("x",a-l),o.setAttribute("y",d-c),o.id=r,n.parentElement.appendChild(o)}}function _r(t,e,n,i=!0,r=""){var s=document.getElementById(r),o=[];if(s&&s.parentElement.removeChild(s),i){let[c,g]=dn(t,e,n);var a=document.createElementNS("http://www.w3.org/2000/svg","g"),d=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","use");l.setAttributeNS("http://www.w3.org/1999/xlink","href",n.getElementsByTagName("use")[0].getAttributeNS("http://www.w3.org/1999/xlink","href")),l.setAttribute("x",c-100),l.setAttribute("y",g),l.setAttribute("height","720px"),l.setAttribute("width","720px"),a.id=r,a.classList.add("note"),d.classList.add("notehead"),d.appendChild(l),a.appendChild(d),n.parentElement.appendChild(a),a.onclick=()=>b(a),o.push(a)}return o.reverse()}function Mr(t,e,n,i,r=!0,s=""){var o=y(mei,E(i));if(!t.score_elem.contains(o))return console.log("Note not in layer?"),!1;var a=mei.createElement("note"),d=[];if(a.setAttribute("xml:id",s),r){let l;o.closest("chord")?l=o.closest("chord"):(l=tr(mei,o),o.parentElement.insertBefore(l,o),o.parentElement.removeChild(o),l.appendChild(o),d.push(l)),a.setAttribute("pname",e),a.setAttribute("oct",n),l.appendChild(a),d.push(a),t.id_mapping.push([s,s])}else return console.log("Not implemented"),!1;return d.reverse()}function hn(t,e,n,i,r,s=!1){var o="new-"+dt();let a=n;typeof r!="undefined"&&(o=r);var d=[];console.log(n),d.push(_r(t,e,n,i,o));var l=_();d.push(Mr(l.layer,t,e,n,i,o)),fn(),s||Qe();var c=We();c.push(["add note",d.reverse(),[a],[]])}function Nr(){var t=_(),e=Ae();if(e!=""&&t.canEdit){let[n,i,r]=vt();if(!n)return;hn(n,i,r,!0)}}function gn(){var t=_(),e=Ae();if(typeof t!="undefined"){if(!t.canEdit)return;let[n,i,r]=vt();e="temp"+dt(),Dn(e),document.getElementById("layers").style.cursor="crosshair",n&&un(n,i,r,!0,e)}}function mn(){var t=Ae();let e=document.getElementById(t);e&&e.parentElement.removeChild(e),t="",Dn(t),document.getElementById("layers").style.cursor="default"}function fn(){var t=_(),e=Ae();if(t.canEdit)return e?(mn(),!1):(gn(),!0)}function Ar(){var t=_();if(!t.canEdit)return;let[e,n,i]=vt();e&&un(e,n,i,!0,Ae())}const Ir={note:["relations","metarelations","comborelations"],relation:["metarelations","relations","comborelations"],metarelation:["metarelations","comborelations","relations"]},pn={name:"relation",main:{repeat:{key:"e",color:1,shadeColor:0},passing:{key:"p",color:2,shadeColor:6},neighbour:{key:"n",color:3,shadeColor:2},harmonic:{key:"i",color:4,shadeColor:3},arpeggio:{key:"a",color:5,shadeColor:4},urlinie:{key:"u",color:6,shadeColor:5},bassbrechung:{key:"b",color:7,shadeColor:5},untyped:{color:5}},additional:["repetition","arpeggiation","back_relating_dominant","displacement","register_transfer","56_shift","added_root","initial_ascent","arpeggiated_ascent","urlinie_transference","bassbrechung_component","coupling","voice_exchange_component","voice_exchange_component_chromaticized","mixture","phrygian_ii"]},yn={name:"metarelation",main:{context:{key:"c",color:1,shadeColor:0},layer:{key:"l",color:2,shadeColor:6},phrase:{key:"r",color:3,shadeColor:2},section:{key:"t",color:5,shadeColor:3}},additional:["auxiliary_cadence","superposition","reaching_over","urlinie_meta","ursatz","bassbrechung","bassbrechung_transference","ursatz_transference","unfolding","motion_into_the_inner_voice","motion_from_the_inner_voice","linear_intervallic_progression","linear_intervallic_progression_module","interruption","interruption_branch_1","interruption_branch_2","voice_exchange","motivic_parallelism","motive","contradiction","indeterminacy","parallel_fifths","parallel_octaves"]},lt={name:"comborelation",main:{"passing comborelation":{key:"P",total:"passing",outer:"arpeggio"},"neighbour comborelation":{key:"N",total:"neighbour",outer:"repeat"}}},Tr=t=>Ir[t];function xr(t){let e=t.querySelector(".accid");if(!e){console.log("No accidental to remove");return}Lr(e),e.classList.add("hidden");let n=E(e);var i=V();for(const r of i){let s=r.id_prefix+n,o=document.getElementById(s);o&&o.classList.add("hidden")}}function Lr(t){for(var e=t.parentElement;!e.classList.contains("note");)e=e.parentElement;var n=E(e),i=y(mei,n);wr(i)}function wr(t){t.removeAttribute("accid");var e=Array.from(t.children).filter(n=>n.tagName=="accid");e.forEach(n=>t.removeChild(n))}class Sr{onTap({target:e}){e==this.btn&&this.naturalize()}naturalize(){M.selectionType=="note"&&ft(M.flatSelection[0]).canEdit&&(M.flatSelection.forEach(xr),M.flatSelection.forEach(b))}init(){this.btn=document.getElementById("naturalize-note")}}const vn=new Sr;class Br{constructor(){this.update()}onResize(){this.update()}onMouseMove(e,n){I.style.setProperty("--mouse-x",e),I.style.setProperty("--mouse-y",n)}update(){this.w=window.innerWidth,this.h=window.innerHeight}}const Y=new Br,Dr=({id:t,x:e,y:n,noteId:i,contextId:r})=>`
  <svg
      id="${t}"
      class="bookmark"
      viewBox="0 0 12 16"
      width="200" height="267"
      x="${e}"
      y="${n}"
      fill="#e42618"
      data-note-id="${i}"
      data-context-id="${r}"
  >
      <path d="M10.72 0H1.332A1.315 1.315 0 0 0 .024 1.307v9.91c0 .416.2.808.535 1.054l4.687 3.476c.217.157.475.245.743.253.267-.01.525-.098.743-.252l4.731-3.477c.333-.248.526-.64.52-1.055V1.307A1.3 1.3 0 0 0 10.72 0Z" fill="#e42618"/>
      <path d="m8.93 6.985-.936.906.208 1.278c.111.577-.519 1.086-1.055.794l-1.152-.608-1.158.609c-.536.268-1.153-.216-1.048-.788L4.01 7.9l-.943-.906c-.423-.42-.165-1.155.408-1.241l1.278-.193.572-1.16c.272-.524 1.05-.523 1.322 0l.58 1.159 1.277.193c.571.094.817.807.424 1.233Z" fill="#fff"/>
  </svg>
`;class kr{constructor(){this.items=[],this.previousBtn=document.getElementById("previous-bookmark"),this.nextBtn=document.getElementById("next-bookmark"),this.$count=document.getElementById("bookmarks-count")}get currentContextItems(){const e=_(),n=parseInt(e.id_prefix||0);return this.items.filter(i=>parseInt(i.dataset.contextId)==n)}get count(){return this.currentContextItems.length}onTap({target:e}){if(e==this.btn)return this.toggle();if(e==this.previousBtn)return this.toPrevious();if(e==this.nextBtn)return this.toNext()}toggle(e=M.lastSelected){if(!vi(e))return;const n=_(),i=e.children[0].children[0];if(e.dataset.bookmarkId){const a=n.svg_elem.querySelector(`#${e.dataset.bookmarkId}`);return this.items=this.items.filter(({id:d})=>d!=a.id),a.remove(),delete e.dataset.bookmarkId,this.setCount()}const r=`bookmark-${e.id}`,s=Dr({id:r,x:parseInt(i.getAttribute("x"))+11,y:parseInt(i.getAttribute("y"))-500,noteId:e.id,contextId:n.id_prefix||0});n.svg_elem.querySelector(".page-margin").insertAdjacentHTML("beforeend",s),e.dataset.bookmarkId=r;const o=n.svg_elem.querySelector(`#${r}`);this.items.push(o),this.items.sort((a,d)=>{const l=parseInt(a.getAttribute("x")),c=parseInt(d.getAttribute("x")),g=parseInt(a.getAttribute("y")),u=parseInt(d.getAttribute("y"));return l!=c?l-c:g-u}),this.setCount()}setCount(){this.$count.innerHTML=this.count,I.classList.toggle("has-bookmarks-in-context",this.count),I.classList.toggle("has-several-bookmarks-in-context",this.count>1)}toPrevious(){this.goTo(-1)}toNext(){this.goTo(1)}goTo(e=1){let n=null,i=null;e>0&&(n=this.currentContextItems.find(r=>(i=me(r,["top","right","bottom","left"]),i.right>Y.w||i.left>Y.w/2&&(i.bottom>Y.h||i.top<0)))),e<0&&(this.items.reverse(),n=this.currentContextItems.find(r=>(i=me(r,["top","right","bottom","left"]),i.left<0||i.left<Y.w/2&&(i.bottom>Y.h||i.top<0))),this.items.reverse()),n||(n=e>0?this.currentContextItems[0]:this.currentContextItems[this.count-1],i=me(n,["top","left"]),e=e*-1),I.scrollBy(i.left+window.innerWidth/2*e,i.top+window.innerHeight/2*e)}init(){this.btn=document.getElementById("bookmark-note"),this.items=[]}}const fe=new kr;function bn(t,e,n){if(t.children.length==0){t.y=e;return}t.children.forEach(i=>bn(i,e,n)),t.y=n+t.children.map(i=>i.y).reduce((i,r)=>i>r?i:r)}function En(t,e,n){t.children.length!=0&&(Math.abs(e-t.y)>n&&(t.y+=(e-n-t.y)/2),t.children.forEach(i=>En(i,t.y,n)))}function He(t){return t.children.length==0?[t]:t.children.flatMap(He)}function _n(t){t.children.forEach(_n),!(t.children.length==0||t.x!=null)&&(t.x=Kt(t.children.map(e=>e.x)))}function Cr(t,e=0,n=-500){_n(t),bn(t,e,n),En(t,t.y,n)}function Mn(t,e=100){var n=Be(),i=qt(t.label,[t.x,t.y+(t.children.length==0?e:0)]);i.style.fontFamiy="sans-serif",i.style.fontSize=e+"px",i.style.textAnchor="middle",i.classList.add("nodetext");var r=t.children.map(o=>Pt([t.x,t.y],[o.x,o.y])),s=t.children.flatMap(o=>Mn(o,e));return r.forEach(o=>n.appendChild(o)),s.forEach(o=>n.appendChild(o)),n.appendChild(i),n}function jr(t,e=25){var n=t.getBBox(),i=Di([n.x-e,n.y-e],n.width+e,n.height+e);t.parentNode.insertBefore(i,t)}function Nn(t){var e,n,i=mei.createElement("label");if(i.append(t.label),console.log(t.note_id),t.note_id){var r=mei.createElement("note");r.setAttribute("corresp","#"+t.note_id),i.appendChild(r)}return t.children.length==0?e=mei.createElement("eLeaf"):(e=mei.createElement("eTree"),n=t.children.map(Nn)),e.appendChild(i),n&&n.forEach(s=>e.appendChild(s)),e}function zr(t){var e=O(),n=e.parentNode;n.querySelector("eTree")&&n.removeChild(n.querySelector("eTree")),n.appendChild(t)}function An(t){var e=t.children[0],n={label:e.textContent};e.children.length!=0&&(n.note_id=e.querySelector("note").getAttribute("corresp").replace("#",""));var i=Array.from(t.children);return i.shift(),n.children=i.map(An),n}function Or(t){return An(t)}function In(t,e){e.note_id&&(e.x=C(y(document,B(t,e.note_id)))[0]),e.children.forEach(n=>In(t,n))}function Tn(t){var e=mei.querySelector("eTree");if(!e){console.log("No tree to load");return}var n=Or(e),i=JSON.stringify(n),r=document.getElementById("json-tree");r.value=i}function pe(t){return JSON.parse(document.getElementById("json-tree").value)}function Ur(t){var e=He(t);return e[0].hasOwnProperty("x")}function Rr(t){var e=He(t);return e[0].hasOwnProperty("note_id")}function $r(t){var e=pe();if(!!e){var n=Nn(e);zr(n)}}function xn(t){var e=pe();if(!!e){var n=document.getElementById("json-tree"),i=selected.concat(extraselected);selected.length==0?i=Array.from(t.svg_elem.getElementsByClassName("note")):selected.length==1?selected[0].classList.contains("relation")&&(i=relation_get_notes(selected[0]).map(a=>y(document,B(t,a.getAttribute("xml:id"))))):selected[0].classList.contains("metarelation")||selected.length>1;var r=i.map(a=>[C(a)[0],a]);r.sort((a,d)=>a[0]-d[0]);var s=He(e);if(s.length!=r.length){console.log("Wrong length of list, expected "+s.length+" got "+r.length);return}for(let a in s)s[a].x=r[a][0],s[a].note_id=r[a][1].id;var o=JSON.stringify(e);n.value=o,t.svg_elem.getRootNode().getElementById("tree"+t.id_prefix)&&Ln(t)}}function Ln(t,e=0,n=-1e3){var i=t.svg_elem,r=t.id_prefix;bt(t);var s=pe();if(!(!s&&(console.log("No tree in input, attempting to load from XML"),Tn(),s=pe(),!s))&&!(!Rr(s)&&(console.log("Tree not aligned, attempting to align to selection"),xn(t),s=pe(),!s))){Ur(s)||In(t,s),Cr(s,e,n);var o=Mn(s);o.id="tree"+r,Ue(i,o),Array.from(o.getElementsByTagName("text")).forEach(jr),wn(t,-s.y)}}class Yr{constructor(e){this.layers=e,this.jsonInput=document.getElementById("json-tree"),this.saveBtn=document.getElementById("json-tree-save"),this.loadBtn=document.getElementById("json-tree-load"),this.alignBtn=document.getElementById("json-tree-align")}get jsonTree(){try{return JSON.parse(this.jsonInput.value.trim())}catch{return null}}onTap({target:e}){const n=_();if(e==this.saveBtn)return $r();if(e==this.loadBtn)return Tn();if(e==this.alignBtn)return xn(n)}onSubmit(e){if(e.target.id=="json-tree-form"&&(e.preventDefault(),this.jsonTree)){const n=_();Ln(n)}}}class Qr{constructor(e){this.layers=e,this.$ctn=document.getElementById("layer-menu-new"),this.$sliced=document.getElementById("layer-sliced"),this.$tied=document.getElementById("layer-tied"),this.$createBtn=document.getElementById("layer-new")}create(){fo(_(),this.$sliced.checked,this.$tied.checked)}onChange({target:e}){console.log(e)}onTap(e){!e.composedPath().includes(this.$ctn)||e.target==this.$createBtn&&(this.create(),console.log(this.layers))}}class Hr{constructor(e){U(this,"reduce",e=>on(e));U(this,"unreduce",e=>ar(e));this.layers=e,this.ctn=document.getElementById("layers-menu-reductions"),this.reduceBtn=document.getElementById("layers-menu-reduce"),this.unreduceBtn=document.getElementById("layers-menu-unreduce"),this.playReductionBtn=document.getElementById("layers-menu-play-reduction")}play(e){const n=ts(e);st.loadSound(n,e.id_prefix),st.play()}onTap(e){if(!e.composedPath().includes(this.ctn))return;const n=_();if(e.target==this.reduceBtn)return this.reduce(n);if(e.target==this.unreduceBtn)return this.unreduce(n);if(e.target==this.playReductionBtn)return this.play(n)}}class Vr{constructor(e){this.layers=e,this.on=document.getElementById("relations-tree-on"),this.off=document.getElementById("relations-tree-off"),this.drawRoots=document.getElementById("relations-tree-roots-low"),this.visible=!1,this.shouldDrawRootsLow=!1}draw(){const e=_();this.visible?an(e,50,this.shouldDrawRootsLow):rs(e)}onChange({target:e}){e.name=="relations-tree"&&(console.log(_()),this.visible=e.value=="on",this.draw()),e==this.drawRoots&&(this.shouldDrawRootsLow=e.checked,this.draw())}onScoreLoad(){this.updateToggles()}updateToggles(e=_()){console.log(e);const n=e.svg_elem.querySelector("#hier");console.log(n),this[n?"on":"off"].checked=!0}}var Me;class Pr{constructor(){ie(this,Me,!1);U(this,"getAll",()=>V());this.ctn=document.getElementById("layers-menu"),this.toggleBtn=document.getElementById("layers-menu-toggle"),this.layersEls=document.getElementsByClassName("layer-new-ui"),this.visibleLayer=1,this.activeLayer=1,this.$visibleLayer=document.getElementById("visible-layer"),this.$currentLayer=document.getElementById("current-layer"),this.new=new Qr(this),this.reductions=new Hr(this),this.tree=new Vr(this),this.jsonTree=new Yr(this),this.previousLayerBtn=document.getElementById("layers-nav-previous"),this.nextLayerBtn=document.getElementById("layers-nav-next"),this.$saveSettingsCtn=document.getElementById("layer-menu-settings"),this.$shouldSave=document.getElementById("should-save-layer"),this.$lockBtn=document.getElementById("layer-lock"),this.initObserver()}get contexts(){return this.getAll()}onTap(e){if(!!e.composedPath().includes(this.ctn)){if(e.target==this.toggleBtn)return this.toggleVisibility();if(e.target==this.nextLayerBtn)return this.moveBy(1);if(e.target==this.previousLayerBtn)return this.moveBy(-1);if(e.target==this.$lockBtn)return this.toggleLock();if(e.target==this.$shouldSave)return this.toggleSave();this.new.onTap(e),this.setDataPosition(),this.addMouseListeners(),this.observe(),this.updateNavigation(),this.updateLayersCount(),this.reductions.onTap(e),this.jsonTree.onTap(e)}}onChange(e){!e.composedPath().includes(this.ctn)||(this.tree.onChange(e),this.new.onChange(e))}onScoreLoad(){this.addMouseListeners(),this.setDataPosition(),this.updateLayersCount(),this.tree.onScoreLoad()}toggleVisibility(e=!D(this,Me)){de(this,Me,e),this.ctn.classList.toggle("layers-menu--visible",e)}setDataPosition(){Array.from(this.layersEls).forEach((e,n)=>{e.dataset.position=n})}setCurrentLayer(e=0){const n=this.contexts.find(i=>i.layer.layer_number==e);!n||(ls(n),this.$currentLayer.innerHTML=e+1,this.activeLayer=e,this.updateLayersCount(),this.checkLockState(n.canEdit),this.checkSaveState(n.canSave),this.tree.updateToggles(n),fe.setCount())}updateLayersCount(){const e=this.contexts.length==1;I.classList.toggle("has-1-layer",e),I.classList.toggle("has-many-layers",!e);const n=this.activeLayer==0;I.classList.toggle("in-layer-1",n),I.classList.toggle("not-in-layer-1",!n)}updateNavigation(){this.$visibleLayer.innerHTML=this.visibleLayer,this.previousLayerBtn.toggleAttribute("disabled",this.visibleLayer==1),this.nextLayerBtn.toggleAttribute("disabled",this.visibleLayer==this.contexts.length)}observe(){if(this.contexts.length<2)return this.contexts[0].observing=!1,this.observer.disconnect();this.contexts.filter(e=>!e.observing).forEach(e=>{e.layer.layer_elem.childElementCount==1&&e.layer.layer_elem.insertAdjacentHTML("beforeend",`<div class="layer-intersection-landmark" data-position="${e.layer.layer_number}"></div>`),this.observer.observe(e.layer.layer_elem.querySelector(".layer-intersection-landmark")),e.observing=!0})}initObserver(){this.observer=new IntersectionObserver(e=>{e.forEach(r=>{var o;const s=this.contexts.find(a=>r.target.dataset.position==a.layer.layer_number);s&&(s.visibleHeight=(o=r.intersectionRect.height)!=null?o:0)});const n=Math.max(...this.contexts.map(r=>r.visibleHeight)),i=this.contexts.find(r=>r.visibleHeight==n);this.visibleLayer=parseInt(i.layer.layer_elem.dataset.position)+1,this.updateNavigation()},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]})}moveBy(e=0){const n=this.visibleLayer+e,i=this.contexts.reverse()[n-1].layer.layer_elem;this.contexts.reverse(),i.scrollIntoView()}addMouseListeners(){}markAsCurrent(e){this.setCurrentLayer(parseInt(e.target.dataset.position))}toggleSave(e=!_().canSave){_().canSave=e,this.checkSaveState(e)}checkSaveState(e){this.$shouldSave.checked=e}toggleLock(e=!_().canEdit){_().canEdit=e,this.checkLockState(e)}checkLockState(e){this.$lockBtn.classList.toggle("lock-path--unlocked",e),I.classList.toggle("can-edit-layer",e)}}Me=new WeakMap;const ae=new Pr;var xe=!1,Ve="",te,Pe,Fe;const Fr=()=>Pe,qr=()=>Fe;var Le=null,Xe=!0;const he=[];function b(t,e=null){const n=Z(t);if(!["relation","metarelation","note"].includes(n))return;const i=selected.concat(extraselected);if(i.length>0){const o=Z(i[0]),a=i[0].closest(".svg_container"),d=t.closest(".svg_container");if(n!=o||d!=a)return}const r=i.find(o=>o==t);if(r&&(t.classList.remove("selectednote","extraselectednote","selectedrelation","extraselectedrelation"),selected=selected.filter(o=>o!==t),extraselected=extraselected.filter(o=>o!==t)),e===null&&(e=ce.ui.selection.mode.mode=="primary"),n=="note"){if(!r)he.push(t.id),e?(t.classList.add("extraselectednote"),extraselected.push(t)):(t.classList.add("selectednote"),selected.push(t));else{const a=he.findIndex(d=>t.id==d);he.splice(a,1)}const o=he.length;Le=o?document.getElementById(he[o-1]):null}(n=="relation"||n=="metarelation")&&(r||(e?(t.classList.add("extraselectedrelation"),extraselected.push(t)):(t.classList.add("selectedrelation"),selected.push(t)),Le=t),selected.concat(extraselected).length==0&&(Le=null));const s={selected,extraselected};document.dispatchEvent(new CustomEvent("scoreselection",{detail:{selection:s,lastSelected:Le}}))}function Wr(t){var e=Array.from(t.svg_elem.getElementsByClassName("relation")).filter(s=>!s.classList.contains("relation--filtered"));if(e.length>0){Z(e[0]);var n=e[0].closest("div");if(selected.length>0||extraselected.length>0){var i=Z(selected.concat(extraselected)[0]),r=selected.concat(extraselected)[0].closest("div");i!="relation"&&Ee(),n!=r&&Ee()}e.forEach(s=>{s.classList.contains("selectedrelation")||b(s)})}}window.onmousemove=t=>{Pe=t.clientX,Fe=t.clientY,Ve!=""&&Ar()};function Zr(t){t.key==="Shift"&&w("#layers").addClass("shift-pressed")}function Gr(t){t.key==="Shift"&&w("#layers").removeClass("shift-pressed")}function Jr(t){Nr()}function Xr(t){var e;if(!nt()&&t.key!="Enter")if(t.key==R.move_relation_to_front){var n=document.elementFromPoint(Pe,Fe);n.tagName=="circle"&&(n=n.closest("g")),Oe(n),n.onmouseout&&n.onmouseout()}else t.key==R.undo?ln():t.key==R.redo?cn():t.key==R.copy?cr():t.key==R.paste?dr():t.key==R.reduce_relations?on(te):t.key==R.select_same_notes?(qi(),K("repeat")):t.key==R.naturalize_note?vn.naturalize():t.key==Ie.jump_to_next_bookmark?fe.goTo(-1):t.key==Ie.jump_to_previous_bookmark?fe.goTo(1):t.key==Ie.jump_to_context_below?ae.moveBy(1):t.key==Ie.jump_to_context_above?ae.moveBy(-1):t.key==R.deselect_all?Ee():t.key==R.delete_all?pt():t.key==R.add_bookmark?fe.toggle():t.key==Lt.relation||t.key==Lt.meta_relation?t.preventDefault():(e=Object.entries(si).find(i=>i[1].key==t.key))?K(e[0]):(e=Object.entries(ri).find(i=>i[1].key==t.key))?Nt(e[0]):(e=Object.entries(oi).find(i=>i[1].key==t.key))?Qn(e[0]):console.log(t)}function Kr(){console.debug("Using globals: non_notes_hidden"),xe=!xe,es(xe),xe||Bn()}function es(t){console.debug("Using globals: document for element selection"),Array.from(document.getElementsByClassName("beam")).forEach(e=>Array.from(e.children).filter(n=>n.tagName=="polygon").forEach(n=>n.classList.toggle("hidden",t))),ai.forEach(e=>Array.from(document.getElementsByClassName(e)).forEach(n=>n.classList.toggle("hidden",t)))}function X(t){var o,a;const e=t.getAttribute("type"),r=(a=(o=(t.classList.contains("relation")?pn:yn).main[e])==null?void 0:o.color)!=null?a:0,s=ci.getPropertyValue(`--relation-${r}`);t.setAttribute("color",s)}function Ee(){selected.forEach(t=>b(t,!1)),extraselected.forEach(t=>b(t,!0))}function ts(t=null){t||(t=V()[0]);var e=qe(),n=Fn(!0,t),i=new XMLSerializer().serializeToString(n);e.loadData(i);const r=e.renderToMIDI();var s=yo();return e.loadData(s),r}function ns(t){var e=O(),n=V();Ee(),w(".relation").remove(),w(".metarelation").remove();var i=Array.from(e.getElementsByTagName("node")),r=i.filter(s=>s.getAttribute("type")=="relation");i.filter(s=>s.getAttribute("type")=="metarelation"),n.forEach(s=>{r.forEach(o=>gt(s,e,o))}),n.hullPadding=t,n.forEach(Pn),n.forEach(s=>{s.svg_elem.getRootNode().getElementById("hier"+s.id_prefix)&&an(s)})}function is(t){window.drag_selector=new ni({selectables:document.getElementsByClassName("relation"),area:w("#layers")[0],draggability:!1,overflowTolerance:{x:1,y:1},autoScrollSpeed:1e-4}),drag_selector.subscribe("dragstart",({items:e,event:n,isDragging:i})=>{w(".ds-selector-area").show()}),drag_selector.subscribe("dragmove",({items:e,event:n,isDragging:i})=>{Ve==""&&!document.getElementById("minimap").classList.contains("dragging")&&((w(".ds-selector").height()>10||w(".ds-selector").width()>10)&&(w("#minimap").fadeOut(300),document.getElementById("layers").style.cursor="url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjJwdCIgaGVpZ2h0PSIyMnB0IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA0LjQ0OTIxOSAxNC44MDA3ODEgQyA0LjI2OTUzMSAxNC42MjEwOTQgMy45ODA0NjkgMTQuNjIxMDk0IDMuODAwNzgxIDE0LjgwMDc4MSBDIDMuNjIxMDk0IDE0Ljk4MDQ2OSAzLjYyMTA5NCAxNS4yNjk1MzEgMy44MDA3ODEgMTUuNDQ5MjE5IEMgNS43Njk1MzEgMTcuNDE3OTY5IDUuNzY5NTMxIDE5LjI1IDMuODAwNzgxIDIxLjIxODc1IEMgMy42MjEwOTQgMjEuMzk4NDM4IDMuNjIxMDk0IDIxLjY4NzUgMy44MDA3ODEgMjEuODY3MTg4IEMgMy44OTA2MjUgMjEuOTU3MDMxIDQuMDA3ODEyIDIyIDQuMTI1IDIyIEMgNC4yNDIxODggMjIgNC4zNTkzNzUgMjEuOTU3MDMxIDQuNDQ5MjE5IDIxLjg2NzE4OCBDIDYuNzU3ODEyIDE5LjU1NDY4OCA2Ljc1NzgxMiAxNy4xMTMyODEgNC40NDkyMTkgMTQuODAwNzgxIFogTSA0LjQ0OTIxOSAxNC44MDA3ODEgIi8+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA0LjEyNSAxMS45MTc5NjkgQyAzLjExMzI4MSAxMS45MTc5NjkgMi4yOTI5NjkgMTIuNzM4MjgxIDIuMjkyOTY5IDEzLjc1IEMgMi4yOTI5NjkgMTQuNzYxNzE5IDMuMTEzMjgxIDE1LjU4MjAzMSA0LjEyNSAxNS41ODIwMzEgQyA1LjEzNjcxOSAxNS41ODIwMzEgNS45NTcwMzEgMTQuNzYxNzE5IDUuOTU3MDMxIDEzLjc1IEMgNS45NTcwMzEgMTIuNzM4MjgxIDUuMTM2NzE5IDExLjkxNzk2OSA0LjEyNSAxMS45MTc5NjkgWiBNIDQuMTI1IDE0LjY2Nzk2OSBDIDMuNjIxMDk0IDE0LjY2Nzk2OSAzLjIwNzAzMSAxNC4yNTM5MDYgMy4yMDcwMzEgMTMuNzUgQyAzLjIwNzAzMSAxMy4yNDYwOTQgMy42MjEwOTQgMTIuODMyMDMxIDQuMTI1IDEyLjgzMjAzMSBDIDQuNjI4OTA2IDEyLjgzMjAzMSA1LjA0Mjk2OSAxMy4yNDYwOTQgNS4wNDI5NjkgMTMuNzUgQyA1LjA0Mjk2OSAxNC4yNTM5MDYgNC42Mjg5MDYgMTQuNjY3OTY5IDQuMTI1IDE0LjY2Nzk2OSBaIE0gNC4xMjUgMTQuNjY3OTY5ICIvPgo8cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDAlLDAlLDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMjEuNzY1NjI1IDEzLjgwODU5NCBMIDEzLjUxNTYyNSA5LjIyMjY1NiBDIDEzLjM0Mzc1IDkuMTI4OTA2IDEzLjEzNjcxOSA5LjE1MjM0NCAxMi45ODgyODEgOS4yODEyNSBDIDEyLjg0Mzc1IDkuNDEwMTU2IDEyLjc5Mjk2OSA5LjYxMzI4MSAxMi44NjcxODggOS43OTY4NzUgTCAxNi41MzEyNSAxOC45NjA5MzggQyAxNi42MDE1NjIgMTkuMTMyODEyIDE2Ljc2OTUzMSAxOS4yNSAxNi45NTMxMjUgMTkuMjUgQyAxNi45NTMxMjUgMTkuMjUgMTYuOTU3MDMxIDE5LjI1IDE2Ljk1NzAzMSAxOS4yNSBDIDE3LjE0MDYyNSAxOS4yNSAxNy4zMDg1OTQgMTkuMTQwNjI1IDE3LjM3ODkwNiAxOC45NzI2NTYgTCAxOC42ODM1OTQgMTUuOTMzNTk0IEwgMjEuNzIyNjU2IDE0LjYyODkwNiBDIDIxLjg4MjgxMiAxNC41NjI1IDIxLjk4ODI4MSAxNC40MDYyNSAyMiAxNC4yMzA0NjkgQyAyMi4wMDc4MTIgMTQuMDU4NTk0IDIxLjkxNzk2OSAxMy44OTQ1MzEgMjEuNzY1NjI1IDEzLjgwODU5NCBaIE0gMjEuNzY1NjI1IDEzLjgwODU5NCAiLz4KPHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDUuNjY0MDYyIDEyLjc2NTYyNSBDIDUuNTc4MTI1IDEyLjYyODkwNiA1LjQ3MjY1NiAxMi41MDc4MTIgNS4zNTU0NjkgMTIuNDAyMzQ0IEMgNS4zMzk4NDQgMTIuMzg2NzE5IDUuMzI0MjE5IDEyLjM3NSA1LjMwODU5NCAxMi4zNjMyODEgQyA1LjIxMDkzOCAxMi4yNzczNDQgNS4xMDU0NjkgMTIuMjA3MDMxIDQuOTkyMTg4IDEyLjE0NDUzMSBDIDQuOTYwOTM4IDEyLjEyODkwNiA0LjkyOTY4OCAxMi4xMDkzNzUgNC44OTg0MzggMTIuMDkzNzUgQyA0Ljc3MzQzOCAxMi4wMzUxNTYgNC42NDQ1MzEgMTEuOTg4MjgxIDQuNTA3ODEyIDExLjk1NzAzMSBDIDQuNDY4NzUgMTEuOTQ5MjE5IDQuNDI1NzgxIDExLjk0OTIxOSA0LjM4MjgxMiAxMS45NDE0MDYgQyA0LjI2OTUzMSAxMS45MjU3ODEgNC4xNTIzNDQgMTEuOTE3OTY5IDQuMDM5MDYyIDExLjkyNTc4MSBDIDMuNjMyODEyIDExLjk0NTMxMiAzLjI2NTYyNSAxMi4wOTc2NTYgMi45Njg3NSAxMi4zMzU5MzggQyAzLjE5MTQwNiAxMi40OTYwOTQgMy40MTQwNjIgMTIuNjQ4NDM4IDMuNjU2MjUgMTIuNzkyOTY5IEMgMy43NSAxMi44NDc2NTYgMy44NTkzNzUgMTIuODY3MTg4IDMuOTY4NzUgMTIuODUxNTYyIEMgNC4zNDc2NTYgMTIuNzg1MTU2IDQuNzUzOTA2IDEyLjk3NjU2MiA0LjkzNzUgMTMuMzM1OTM4IEMgNC45ODgyODEgMTMuNDMzNTk0IDUuMDcwMzEyIDEzLjUxMTcxOSA1LjE2Nzk2OSAxMy41NTA3ODEgQyA1LjQyMTg3NSAxMy42NTYyNSA1LjY4NzUgMTMuNzM4MjgxIDUuOTQ5MjE5IDEzLjgyODEyNSBDIDUuOTQ5MjE5IDEzLjgwMDc4MSA1Ljk1NzAzMSAxMy43NzczNDQgNS45NTcwMzEgMTMuNzUgQyA1Ljk1NzAzMSAxMy4zODY3MTkgNS44NDc2NTYgMTMuMDUwNzgxIDUuNjY0MDYyIDEyLjc2NTYyNSBaIE0gNS42NjQwNjIgMTIuNzY1NjI1ICIvPgo8cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDAlLDAlLDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMTMuMzgyODEyIDEzLjU1ODU5NCBDIDExLjE5MTQwNiAxMy44OTg0MzggOC44NTkzNzUgMTMuNzUgNi44MDQ2ODggMTMuMTUyMzQ0IEMgNi44NDc2NTYgMTMuMzQzNzUgNi44NzUgMTMuNTQyOTY5IDYuODc1IDEzLjc1IEMgNi44NzUgMTMuODcxMDk0IDYuODU1NDY5IDEzLjk4ODI4MSA2LjgzOTg0NCAxNC4xMDkzNzUgQyA4LjE1NjI1IDE0LjQ2ODc1IDkuNTY2NDA2IDE0LjY2Nzk2OSAxMSAxNC42Njc5NjkgQyAxMS45MjU3ODEgMTQuNjY3OTY5IDEyLjgzOTg0NCAxNC41ODIwMzEgMTMuNzM0Mzc1IDE0LjQyOTY4OCBaIE0gMTMuMzgyODEyIDEzLjU1ODU5NCAiLz4KPHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDExIDAgQyA0LjkzMzU5NCAwIDAgMy4yODkwNjIgMCA3LjMzMjAzMSBDIDAgOC45NDE0MDYgMC44MDQ2ODggMTAuNDkyMTg4IDIuMjM4MjgxIDExLjc1NzgxMiBDIDIuNDY4NzUgMTEuNTM5MDYyIDIuNzM4MjgxIDExLjM1NTQ2OSAzLjAzNTE1NiAxMS4yMjY1NjIgQyAxLjY3OTY4OCAxMC4xMDkzNzUgMC45MTc5NjkgOC43MzgyODEgMC45MTc5NjkgNy4zMzIwMzEgQyAwLjkxNzk2OSAzLjc5Njg3NSA1LjQ0MTQwNiAwLjkxNzk2OSAxMSAwLjkxNzk2OSBDIDE2LjU1ODU5NCAwLjkxNzk2OSAyMS4wODIwMzEgMy43OTY4NzUgMjEuMDgyMDMxIDcuMzMyMDMxIEMgMjEuMDgyMDMxIDguNzUzOTA2IDIwLjM0Mzc1IDEwLjEwMTU2MiAxOC45ODgyODEgMTEuMjE4NzUgTCAxOS44Mzk4NDQgMTEuNjg3NSBDIDIxLjIyNjU2MiAxMC40Mzc1IDIyIDguOTEwMTU2IDIyIDcuMzMyMDMxIEMgMjIgMy4yODkwNjIgMTcuMDY2NDA2IDAgMTEgMCBaIE0gMTEgMCAiLz4KPC9nPgo8L3N2Zz4K), auto"),document.elementsFromPoint(Pe,Fe).map(r=>{switch(r.tagName){case"path":return r;case"use":return r.parentElement.parentElement;case"circle":return r.parentElement;default:return!1}}).filter(r=>{if(typeof r=="undefined"||typeof r.classList=="undefined")return!1;var s=n.shiftKey;return r.classList.contains("relation")&&!r.classList.contains("relation--filtered")&&!r.classList.contains("selectedrelation")&&!r.classList.contains("extraselectedrelation")&&!s||r.classList.contains("note")&&!r.classList.contains("selectednote")&&!r.classList.contains("extraselectednote")||r.classList.contains("metarelation")&&!r.classList.contains("selectedrelation")&&!r.classList.contains("extraselectedrelation")&&!s}).forEach(b))}),drag_selector.subscribe("callback",({items:e,event:n,isDragging:i})=>{document.getElementById("layers").style.cursor="default",w(".ds-selector-area").hide(),w("#minimap").fadeIn(300)})}function bt(t){var e=t.svg_elem,n=t.id_prefix,i=e.getRootNode().getElementById("hier"+n);return i||(i=e.getRootNode().getElementById("tree"+n),i)?(i.parentNode.removeChild(i),!0):!1}function wn(t,e){var n=t.svg_elem,i=n.children[0].getAttribute("height"),r=n.getElementsByClassName("definition-scale")[0].getAttribute("viewBox"),s,o,a,d;t.old_viewbox?([s,o,a,d]=t.old_viewbox.split(" "),i=t.old_height):([s,o,a,d]=r.split(" "),t.old_viewbox=r,t.old_height=i),n.getElementsByClassName("definition-scale")[0].setAttribute("viewBox",[s,Number(o)-e,a,Number(d)+e].join(" "));var l=Number(i.split("p")[0]);n.children[0].setAttribute("height",l*((d-(o-e))/(d-o))+"px")}function rs(t){var e=t.svg_elem;t.id_prefix;var n=bt(t);n&&(e.getElementsByClassName("definition-scale")[0].setAttribute("viewBox",t.old_viewbox),e.children[0].setAttribute("height",t.old_height))}const ss=document.getElementById("minimap");function Sn(){ti(ss,{viewport:null,styles:{".svg_container":"rgba(0,0,0,0.30)",".layer":"rgba(0,0,0,0.00)"},back:"rgba(0,0,0,0.30)",view:"rgba(0,0,0,0.20)",drag:"rgba(0,0,0,0.30)",interval:null})}function os(){var t=O(),e=Array.from(document.getElementsByClassName("note")).map(i=>i.id),n=Array.from(t.getElementsByTagName("arc")).map(i=>i.getAttribute("to"));e.forEach(i=>{var r=i.replace(/(^\d+-?)/,"");n.includes(`#gn-${r}`)||document.getElementById(i).classList.add("hidden")})}function Bn(){Array.from(document.querySelectorAll("g.note")).forEach(t=>t.classList.remove("hidden"))}function as(){Xe=!Xe,Xe?Bn():os()}const Ae=()=>Ve,Dn=t=>Ve=t,_=()=>te,ls=t=>{te==null||te.layer.layer_elem.classList.remove("layer--active"),te=t,te.layer.layer_elem.classList.add("layer--active")};class cs extends Map{constructor(){super(...arguments);U(this,"add",(e,n)=>this.has(e)?this:this.set(e,n));U(this,"remember",(e,n)=>(typeof n=="function"&&(n=this.has(e)?this.get(e):n()),this.add(e,n),n))}}const ds=["note","relation","metarelation"];var Ne,q;class us{constructor(){ie(this,Ne,void 0);ie(this,q,new cs);this.loaded=!1,this.mei=null,this.layersCtn=document.getElementById("layers"),this.lastSelected=null}get selection(){return D(this,Ne)}set selection(e){D(this,q).clear(),de(this,Ne,e)}get flatSelection(){return D(this,q).remember("flatSelection",()=>Object.values(this.selection).flat())}get hasSelection(){return D(this,q).remember("hasSelection",()=>this.flatSelection.length>0)}get selectionType(){return D(this,q).remember("selectionType",()=>{var e;return(e=ds.find(n=>{var i;return(i=this.flatSelection[0])==null?void 0:i.classList.contains(n)}))!=null?e:null})}get selectedRelationTypes(){return D(this,q).remember("selectedRelationTypes",()=>!this.hasSelection||this.selectionType=="note"?null:new Set(this.flatSelection.map(e=>e.getAttribute("type")).filter(e=>e)))}onScoreLoad(){this.loaded=!0,this.mei=window.mei,D(this,q).clear(),ae.setCurrentLayer(0)}onScoreSelection({detail:e}){if(this.selection=e.selection,this.lastSelected=e.lastSelected,!this.flatSelection.length)return;const n=_(),i=ft(this.flatSelection[0]);n.layer_number!=i.layer_number&&ae.setCurrentLayer(i.layer_number)}onTap(e){if(!this.loaded||!e.composedPath().includes(this.layersCtn))return;const n=e.composedPath().find(i=>i.classList.contains("layer"));n&&ae.setCurrentLayer(parseInt(n.dataset.position))}}Ne=new WeakMap,q=new WeakMap;const M=new us;class zt{constructor(e,n){U(this,"createFilterElement",({type:e,checked:n})=>`
    <li>
        <label class="checkable color-relation-${e}" for="${this.namespace}-filter-${e}">
            ${ct(e)}
            <input class="checkable__input" type="checkbox" id="${this.namespace}-filter-${e}" data-type="${e}" ${n?"checked":""}>
            <span class="checkbox checkbox--colored">
                <svg class="checkable__icon btn__icon" width="12" height="10">
                    <use href="#check-path"/>
                </svg>
            </span>
        </label>
    </li>
  `);this.namespace=e,this.ctn=document.getElementById(n.filterCtnId),this.paths=M.layersCtn.getElementsByClassName(e),this.fields=[]}onChange(e){e.composedPath().includes(this.ctn)&&this.toggleRelationsPaths(e.target.dataset.type,e.target.checked)}toggleRelationsPaths(e,n){Array.from(this.paths).filter(i=>i.getAttribute("type")==e).forEach(i=>i.classList.toggle("relation--filtered",!n))}getRelations(){const e=new Set(Array.from(this.paths,n=>n.getAttribute("type")));this.fields=Array.from(e,n=>({type:n,checked:!0,el:null}))}hasRelationType(e){return this.fields.some(n=>n.type==e)}wasLastOfType(e){return!Array.from(this.paths).some(n=>n.getAttribute("type")==e)}render(){let e=this.fields.map(n=>this.createFilterElement(n)).join(" ");this.ctn.innerHTML=e}}class hs{constructor(){U(this,"createFiltersGroups",()=>[new zt("relation",{filterCtnId:"relations-filters"}),new zt("metarelation",{filterCtnId:"meta-relations-filters"})]);U(this,"createMutationObserver",()=>new MutationObserver(e=>{if(e.filter(s=>s.type=="attributes"&&s.attributeName=="type").filter(s=>s.target.getAttribute("type")!=s.oldValue).length>0)return this.update();const i=e.length==1&&e.filter(s=>{var o;return s.type=="childList"&&((o=s.addedNodes)==null?void 0:o.length)==1}).map(s=>{var o;return(o=s.addedNodes)==null?void 0:o.item(0)}).find(rt.isElement);if(i){const s=i.getAttribute("type");if(!this.groups.some(a=>a.hasRelationType(s)))return this.update()}const r=e.length==1&&e.filter(s=>{var o;return s.type=="childList"&&((o=s.removedNodes)==null?void 0:o.length)==1}).map(s=>{var o;return(o=s.removedNodes)==null?void 0:o.item(0)}).find(rt.isElement);if(r){const s=r.getAttribute("type");if(this.groups.some(a=>a.wasLastOfType(s)))return this.update()}}));this.visible=!1,this.ctn=document.getElementById("filters"),this.toggleBtn=document.getElementById("filters-toggle"),this.observer=this.createMutationObserver(),this.groups=this.createFiltersGroups()}onTap({target:e}){e==this.toggleBtn&&this.toggle()}onChange(e){this.groups.forEach(n=>n.onChange(e))}onScoreLoad(){this.toggle(!1),this.observer.disconnect(),this.update(),this.observe()}observe(){this.observer.observe(document.querySelector("#layers .svg_container > svg .page-margin"),{subtree:!0,childList:!0,attributeOldValue:!0,attributeFilter:["type"]})}toggle(e=!this.visible){this.visible=e,this.ctn.classList.toggle("fly-out--expanded",e),this.ctn.classList.toggle("fly-out--collapsed",!e)}update(){this.groups.forEach(e=>e.getRelations()),this.groups.forEach(e=>e.render())}}const gs=new hs;var ge={title:{label:"Title",saveBtn:"Update title",placeholder:"The name \u266A of the song \u266B"},roles:{composer:{label:"Composer",saveBtn:"Update composer",placeholder:"Wolfgang Amadeus Mozart"},analyst:{label:"Analyst",saveBtn:"Assign responsibility",placeholder:"Maybe\u2026 you?"},annotator:{label:"Annotator",saveBtn:"Assign responsibility",placeholder:"Maybe\u2026 you?"}}};const kn=(t,{label:e,placeholder:n=""},i="")=>`
  <label class="fillable fly-out__title" for="metadata-${t}">
      ${e}
      <input
          class="fillable__input"
          id="metadata-${t}"
          type="text"
          placeholder="${n}"
          value="${i}"
      >
  </label>
`,Cn=(t,{saveBtn:e})=>`
  <button
      class="btn btn--plain btn--small"
      id="metadata-${t}-assign"
      type="button"
      data-role="${t}"
  >${e}</button>
`,ms=t=>t.map(({role:e,config:n,value:i})=>`
    <hr class="fly-out__hr">
    ${kn(e,n,i)}
    ${Cn(e,n)}
  `).join(""),fs=new DOMParser,ps=new RegExp(/^metadata-(\w+)-assign$/);class ys{constructor(){this.visible=!1,this.ctn=document.getElementById("metadata"),this.toggleBtn=document.getElementById("metadata-toggle"),this.persRoles=Object.keys(ge.roles),this.formDOM={ctn:document.getElementById("metadata-form")},this.formDOM.inputs=this.formDOM.ctn.getElementsByClassName("fillable__input"),this.scoreHead={titleStmt:null,title:null,respStmt:null,respPersName:[]}}onTap({target:e}){var i;if(e==this.toggleBtn)return this.toggle();let n=(i=e.id.match(ps))==null?void 0:i[1];n&&this.updateScoreMetadata(n)}onScoreLoad(){this.initScore(),this.initFields()}toggle(e=!this.visible){this.visible=e,this.ctn.classList.toggle("fly-out--expanded",e),this.ctn.classList.toggle("fly-out--collapsed",!e)}updateScoreMetadata(e){const n=[...this.formDOM.inputs].find(({id:s})=>s=`metadata-${e}`);if(!n)return;const i=n.value;if(e=="title"){this.scoreHead.title[0].innerHTML=i;return}const r=this.persNames.find(s=>s.role==e);r.value=i,r.el.innerHTML=i,e!="composer"&&M.flatSelection.forEach(s=>{const o=E(s),a=y(M.mei,o);(a.tagName=="note"?a:a.firstChild).setAttribute("resp",e)})}initScore(){this.scoreHead.titleStmt=M.mei.querySelector("meiHead fileDesc titleStmt"),!!this.scoreHead.titleStmt&&(this.initStmtEl("title"),this.initStmtEl("respStmt"),this.initRoles())}initStmtEl(e){if(this.scoreHead[e]=this.scoreHead.titleStmt.getElementsByTagName(e),!this.scoreHead[e].length){const n=M.mei.createElement(e);this.scoreHead.titleStmt.appendChild(n)}}initRoles(){this.scoreHead.respPersName=this.scoreHead.respStmt[0].getElementsByTagName("persName"),this.persNames=Array.from(this.scoreHead.respPersName).filter(e=>this.persRoles.includes(e.getAttribute("role"))).map(e=>({el:e,role:e.getAttribute("role"),value:e.innerHTML,config:ge.roles[e.getAttribute("role")]})),this.persRoles.filter(e=>!this.persNames.find(n=>n.role==e)).forEach(e=>this.initRole(e))}initRole(e){const n=fs.parseFromString(`<persName role="${e}" xml:id="${e}" />`,"text/xml").firstChild;this.scoreHead.respStmt[0].appendChild(n),this.persNames.push({el:n,role:e,value:"",config:ge.roles[e]})}initFields(){this.formDOM.ctn.innerHTML=kn("title",ge.title,this.scoreHead.title[0].innerHTML)+Cn("title",ge.title)+ms(this.persNames)}}const vs=new ys;class bs{constructor(){this.toLeftBtn=document.getElementById("to-left"),this.toRightBtn=document.getElementById("to-right")}onTap(e){if(e.target==this.toLeftBtn)return this.toLeft();if(e.target==this.toRightBtn)return this.toRight()}toLeft(){this.goTo(-(Y.w-200))}toRight(){this.goTo(Y.w-200)}goTo(e){I.scrollBy(e,0)}}const Es=new bs;class jn{constructor(e){U(this,"hide",()=>this.toggleVisibility(!1));this.ctn={el:document.getElementById(e)},this.closeBtn=this.ctn.el.querySelector(".fly-out__closeBtn"),this.visible=!1}onTap(e){if(!!e.composedPath().includes(this.ctn.el)&&e.target==this.closeBtn)return this.toggleVisibility(!1)}toggleVisibility(e=!this.visible){this.ctn.el.classList.toggle("fly-out--visible",e),this.visible=e}}function _s(t,e=null){t.preventDefault(),e&&e.call()}const Ms=10,Ot=(t,e=1)=>`${be(t/Ms,e)}rem`,we=10;var ne;class Ns extends jn{constructor(e){super(e);ie(this,ne,!1);this.dragHandle={el:this.ctn.el.querySelector(".fly-out__drag")},this.visible=!1,this.x=0,this.y=0,this.computeValues()}onTapStart(e){e.target==this.dragHandle.el&&_s(e,()=>this.toggleDragging(!0))}onTapMove(e,n){this.visible&&D(this,ne)&&this.updatePosition(e,n)}onTapEnd(){this.visible&&D(this,ne)&&(this.toggleDragging(!1),this.computeValues())}onResize(){!this.visible||this.computeValues()}updatePosition(e=this.x,n=this.y){this.x=e-this.ctn.handleDeltaX,this.y=n-this.ctn.handleDeltaY,this.ctn.el.style.setProperty("--fly-out-x",Ot(this.x,2)),this.ctn.el.style.setProperty("--fly-out-y",Ot(this.y,2))}toggleDragging(e=!D(this,ne)){de(this,ne,e),this.ctn.el.classList.toggle("fly-out--grabbing",e),I.classList.toggle("dragging-fly-out",e)}snapInViewport(){const e=ve(this.x,we,Y.w-this.ctn.width-we),n=ve(this.y,we,Y.h-this.ctn.height-we);(e!=this.x||n!=this.y)&&(this.ctn.el.classList.add("fly-out--snapping"),this.ctn.el.addEventListener("transitionend",this.onSnapTransitionEnd.bind(this)),this.updatePosition(e+this.ctn.handleDeltaX,n+this.ctn.handleDeltaY))}onSnapTransitionEnd({propertyName:e}){e=="transform"&&(this.ctn.el.classList.remove("fly-out--snapping"),this.ctn.el.removeEventListener("transitionend",this.onSnapTransitionEnd.bind(this)))}computeValues(){const e=["x","y","width","height"];Object.assign(this.ctn,me(this.ctn.el,e)),Object.assign(this.dragHandle,me(this.dragHandle.el,e)),this.ctn.handleDeltaX=this.dragHandle.x-this.ctn.x+this.dragHandle.width/2,this.ctn.handleDeltaY=this.dragHandle.y-this.ctn.y+this.dragHandle.height/2,this.snapInViewport()}}ne=new WeakMap;const Et={hideIfCompact:"hide-when-compact",hideIfNotCompact:"hide-when-not-compact"},As=t=>`
  <div class="fly-out__headerRow">
      <div class="fly-out__title fly-out__title--big">
          ${ct(t)}s
      </div>
  </div>
`,Is=(t,e,n)=>`
  <button
      type="button"
      class="
        btn btn--hollow btn--relation color-relation-${t}
        ${n>2?Et.hideIfCompact:""}
      "
      data-relation-name="${t}"
      data-relation-type="${e}"
  >
      ${ct(t)}
  </button>
`,Ts=t=>`
  <button
      type="button"
      class="fly-out__secondaryBtn fly-out__showMore ${Et.hideIfNotCompact} | btn btn--hollow"
      title="View more ${t}"
  >
      <span class="visually-hidden">View more ${t}</span>
      &hellip;
  </button>
`,xs=(t,e)=>`
  <form
      class="btn-group btn-group--free-field hide-when-compact"
      id="free-field-${e}-form"
  >
      ${Ls(e,{label:"Or type a "+t.name})}
      ${ws(t.additional,e)}

      <button class="btn btn--plain btn--small">
          Assign <span class="visually-hidden">${e}</span>
      </button>
  </form>
`,Ls=(t,{label:e,placeholder:n=""})=>`
  <label
      class="fillable fly-out__relationsField ${Et.hideIfCompact}"
      for="free-field-${t}"
  >
      <span class="fillable__label">
          <span class="fillable__label__text">${e}</span>
          <svg class="fillable__label__triangle | btn__icon" width="10" height="8">
              <use href="#triangle-path"/>
          </svg>
      </span>

      <input
          class="fillable__input"
          id="free-field-${t}"
          type="text"
          list="datalist-${t}"
          placeholder="${e}"
          data-relation-type="${t}"
      >
  </label>
`,ws=(t,e)=>`
  <datalist id="datalist-${e}">${Ss(t)}</datalist>
`,Ss=t=>t.map(Bs).join(""),Bs=t=>`<option value="${t}">`;var le;class Ke{constructor(e,n,i={}){ie(this,le,!1);this.type=e,this.name=n.name,this.eventCallbacks=i,this.initHtml(n)}get isVisible(){return D(this,le)}show(){this.toggleVisibility(!0)}hide(){this.toggleVisibility(!1)}toggleVisibility(e=!D(this,le)){de(this,le,e),this.ctn.classList.toggle("fly-out__relationsBtnsCtn--visible",e)}select(e){if(this.unselect(),!e)return;const n=Array.from(this.btns).filter(s=>e.has(s.dataset.relationName));if(n.forEach(s=>s.classList.add("btn--selected")),e.size<=n.length)return;const i=n.map(s=>s.dataset.relationName),r=[...e].filter(s=>!i.includes(s));this.freeFieldCtn.classList.add("fly-out__relationsField--selected"),r.length==1&&(this.freeField.value=r[0])}unselect(){Array.from(this.selectedBtns).forEach(e=>e.classList.remove("btn--selected")),this.freeFieldCtn.classList.remove("fly-out__relationsField--selected"),this.freeField.value=""}initHtml(e){var o;const n=As(e.name);let i=Object.keys(e.main).map((a,d)=>Is(a,this.type,d)).join("");(e.main.length>3||"additional"in e)&&(i+=Ts(this.type)),i=`<div class="btn-group">${i}</div>`;const r="additional"in e?xs(e,this.type):"";let s="";e.name=="relation"&&(s=`
        <hr class="fly-out__hr visible-when-selection-is-note">
        <div class="fly-out__noteActions btn-group visible-when-selection-is-note">
            <button
                class="fly-out__secondaryBtn | btn btn--hollow btn--small-icon"
                type="button"
                id="bookmark-note"
                aria-label="Bookmark note"
                title="Bookmark note"
            >
                <svg class="btn__icon" width="12" height="16">
                    <use href="#bookmark-path"/>
                </svg>
                <span class="hide-when-compact">Bookmark note</span>
            </button>
            <button
                class="fly-out__secondaryBtn | btn btn--hollow btn--small-icon hidden-when-in-layer-1 hidden-when-can-not-edit-layer"
                type="button"
                id="naturalize-note"
                aria-label="Naturalize note"
                title="Naturalize note"
            >
                <svg class="btn__icon" width="15" height="15">
                    <use href="#note-purple-bg-path"/>
                </svg>
                <span class="hide-when-compact">Naturalize note</span>
            </button>
        </div>
      `),this.ctn=document.getElementById(`${this.type}-btns`),this.ctn.innerHTML=n+i+r+s,this.btns=this.ctn.getElementsByClassName("btn--relation"),this.selectedBtns=this.ctn.getElementsByClassName("btn--selected"),this.freeField=this.ctn.querySelector(`#free-field-${this.type}`),this.freeFieldCtn=(o=this.freeField)==null?void 0:o.parentElement}}le=new WeakMap;const Ds=new RegExp(/^free-field-(\w+)-form$/);class ks extends Ns{constructor(){super("relations-menu");this.innerCtn=document.getElementById("relations-btns-ctn"),this.deleteBtn=this.ctn.el.querySelector(".fly-out__deleteBtn"),this.init()}get visibleGroups(){return[this.relations,this.metarelations,this.comborelations].filter(({isVisible:e})=>e)}onTap(e){if(super.onTap(e),e.target==this.deleteBtn)return pt();const{dataset:n,classList:i}=e.target,r=i.contains("fly-out__compact"),s=i.contains("fly-out__showMore");if(r||s)return this.compact(r),this.computeValues();!(n==null?void 0:n.hasOwnProperty("relationType"))||i.contains("btn--relation")&&this[n.relationType].eventCallbacks.tap(n.relationName)}onSubmit(e){var r,s;const n=(r=e.target.id.match(Ds))==null?void 0:r[1];if(!n)return;e.preventDefault();const{value:i}=(s=this[n])==null?void 0:s.freeField;i&&this[n].eventCallbacks.tap(i)}onScoreSelection(){const{hasSelection:e,selectionType:n,selectedRelationTypes:i}=M;this.relations.select(n=="relation"?i:new Set),this.metarelations.select(n=="metarelation"?i:new Set),this.toggleVisibility(e),this.reorder();const r=n=="note";I.classList.toggle("selection-is-note",r),this.relations.show(),this.metarelations.toggleVisibility(!r),this.compact(),this.deleteBtn.disabled=!e||r,M.flatSelection.length==1&&this.computeValues()}reorder(){if(M.flatSelection.length!==1)return;const e=Tr(M.selectionType);for(let n=e.length-1;n>0;n--)this.innerCtn.insertBefore(this[e[n-1]].ctn,this[e[n]].ctn)}compact(e=null){if(!M.flatSelection.length)return;e!=null&&(this.ctn.el.classList.toggle("fly-out--relations-compact",e),this.ctn.el.classList.toggle("fly-out--big",!e));const n=M.selectionType=="note"&&M.flatSelection.length>2&&M.selection.extraselected.length<3;this.comborelations.toggleVisibility(n)}init(){this.relations=new Ke("relations",pn,{tap:K}),this.metarelations=new Ke("metarelations",yn,{tap:Nt}),this.comborelations=new Ke("comborelations",lt,{tap:Qn}),this.title=this.ctn.el.querySelector(".fly-out__title"),this.updatePosition((Y.w-this.ctn.el.clientWidth)/2,120),this.snapInViewport()}}const Cs=new ks,js=t=>{console.log(t);const e=M.selectionType;return t.length?(e=="note"?Gi(t).map(zs):t.map(Os)).join(""):"-"},zs=t=>`<li class="selection__listItem">${t.toUpperCase()}</li>`,Os=t=>`<li class="selection__listItem">${t.getAttribute("type")}</li>`;class Us extends jn{constructor(){super("selection-legend");this.title=document.getElementById("selection-type"),this.primary=document.getElementById("selection-primary"),this.primaryList=document.getElementById("selection-list-primary"),this.secondary=document.getElementById("selection-secondary"),this.secondaryList=document.getElementById("selection-list-secondary"),this.hide()}update({selected:e,extraselected:n}){this.toggleVisibility(M.hasSelection),this.visible&&(this.updateTitle(),this.updateRow("primary",n),this.updateRow("secondary",e))}updateTitle(){this.title.innerHTML=M.selectionType?`Selected ${M.selectionType}s`:"Selection is empty"}updateRow(e,n){this[e].classList.toggle("none",!n.length),this[`${e}List`].innerHTML=js(n)}}class Rs{constructor(){this.primary=document.getElementById("selection-mode-primary"),this.secondary=document.getElementById("selection-mode-secondary")}set(e){this.mode=e,this.updateBtns()}updateBtns(){this[this.mode].checked=!0}onChange({target:e}){e.name=="selection-mode"&&this.set(e.value)}}class $s{constructor(){this.selectBtn=document.getElementById("select-all"),this.unselectBtn=document.getElementById("unselect-all"),this.legend=new Us,this.mode=new Rs}selectAll(){const e=_();e&&Wr(e)}selectNone(){Ee()}onTap({target:e}){if(e==this.selectBtn)return this.selectAll();if(e==this.unselectBtn)return this.selectNone()}onScoreSelection(e){this.legend.update(e)}}const Ys=new $s,et=1,zn=1.1,Qs=1/zn;class Hs{constructor(){this.zoomInBtn=document.getElementById("zoom-in"),this.zoomOutBtn=document.getElementById("zoom-out"),this.resetBtn=document.getElementById("zoom-reset"),this.levelEl=document.getElementById("zoom-level")}onTap({target:e}){if(e==this.zoomInBtn)return this.in();if(e==this.zoomOutBtn)return this.out();if(e==this.resetBtn)return this.reset()}in(){this.by(zn)}out(){this.by(Qs)}reset(){this.by(et)}by(e=1){const n=_();!n||(n.zoom=e==et?et:n.zoom*e,n.svg_elem.style.transform=`scale(${n.zoom})`,this.levelEl.innerHTML=this.format(n.zoom))}format(e){return`${Math.round(e*100)}%`}}const Vs=new Hs;class Ps{constructor(){this.btn=document.getElementById("new-note"),this.isActive=!1}toggle(){var e;this.isActive=(e=fn())!=null?e:!1,this.btn.classList.toggle("btn--placing-new-note",this.isActive)}enable(){gn(),this.btn.classList.add("btn--placing-new-note"),this.isActive=!0}disable(){mn(),this.btn.classList.remove("btn--placing-new-note"),this.isActive=!1}onTap({target:e}){e==this.btn&&this.toggle()}}const Fs=new Ps;class qs{constructor(e="",n){this.ctn=document.getElementById(`${e}-progress-ctn`),this.setMinMax(n),this.update(n.value)}setMinMax({min:e,max:n}){this.min=parseInt(e),this.max=parseInt(n)}update(e=this.value){e=parseFloat(e);let n=(e-this.min)/(this.max-this.min);n=be(n,3),this.setBar(n)}setBar(e){this.ctn.style.setProperty("--progress",ve(0,e,1))}}class Ws{constructor(){this.input=document.getElementById("relation-width");const{min:e,max:n,value:i}=this.input;this.progressBar=new qs("relation-width",{min:e,max:n,value:i}),this.throttling=!1}onInput({target:e}){e!=this.input||this.throttling||(this.throttling=!0,requestAnimationFrame(()=>{const n=parseInt(e.value);this.progressBar.update(n),ns(n),this.throttling=!1}))}}const Zs=new Ws,Gs=1e4;class Js{constructor(){this.ctn=document.getElementById("player-and-score-settings"),this.toggleVisibilityBtn=document.getElementById("score-settings-toggle"),this.toggleShadesBtn=document.getElementById("settings-shades"),this.toggleStemsBtn=document.getElementById("settings-stems"),this.toggleTonesBtn=document.getElementById("settings-non-related-tones"),this.expanded=!1,this.autoCloseTimer=null,this.brightShades=!0}get interacting(){const e=this.hasInteractionWith(this.ctn),n=this.hasInteractionWith(document.activeElement);return e||n}hasInteractionWith(e){return getComputedStyle(e).getPropertyValue("--in-player-and-score-settings").trim()=="1"}startAutoCloseTimer(){clearTimeout(this.autoCloseTimer),this.autoCloseTimer=setTimeout(()=>{if(this.interacting)return this.startAutoCloseTimer();this.toggleVisibility(!1)},Gs)}onTap(e){if(!e.composedPath().includes(this.ctn))return this.toggleVisibility(!1);if(this.startAutoCloseTimer(),e.target==this.toggleVisibilityBtn)return this.toggleVisibility(!0);if(e.target==this.toggleShadesBtn)return this.toggleShades();if(e.target==this.toggleStemsBtn)return this.toggleStems();if(e.target==this.toggleTonesBtn)return as()}toggleVisibility(e=!this.expanded){this.expanded=e,I.classList.toggle("ui-score-settings-visible",e)}toggleShades(e=!this.brightShades){this.brightShades=e,I.classList.toggle("shades-alternate",!e)}toggleStems(){Kr()}}const Xs=new Js;class Ks{constructor(){this.ctn=document.getElementById("ui"),this.init()}onTap(e){var n,i,r,s,o,a,d,l,c,g,u,h;(n=this.relations)==null||n.onTap(e),(i=this.bookmarks)==null||i.onTap(e),(r=this.accidentals)==null||r.onTap(e),(s=this.scoreSettings)==null||s.onTap(e),!!e.composedPath().includes(this.ctn)&&((o=this.mainMenu)==null||o.onTap(e),(a=this.zoom)==null||a.onTap(e),(d=this.selection)==null||d.onTap(e),(l=this.metadata)==null||l.onTap(e),(c=this.navigation)==null||c.onTap(e),(g=this.filters)==null||g.onTap(e),(u=this.newNote)==null||u.onTap(e),(h=this.layersMenu)==null||h.onTap(e))}onTapStart(e){var n;(n=this.relations)==null||n.onTapStart(e)}onTapMove(e,n){var i;(i=this.relations)==null||i.onTapMove(e,n)}onTapEnd(){var e;(e=this.relations)==null||e.onTapEnd()}onResize(){var e;(e=this.relations)==null||e.onResize()}onScoreLoad(e){var n,i,r;(n=this.filters)==null||n.onScoreLoad(e),(i=this.metadata)==null||i.onScoreLoad(e),(r=this.layersMenu)==null||r.onScoreLoad(e)}onScoreSelection({detail:e}){var n,i;(n=this.selection)==null||n.onScoreSelection(e.selection),(i=this.relations)==null||i.onScoreSelection()}init(){this.startScreen=xi,this.mainMenu=wi,this.zoom=Vs,this.selection=Ys,this.navigation=Es,this.metadata=vs,this.filters=gs,this.relations=Cs,this.bookmarks=fe,this.accidentals=vn,this.newNote=Fs,this.relationWidth=Zs,this.scoreSettings=Xs,this.layersMenu=ae,this.bookmarks.init(),this.accidentals.init()}}const eo=new Ks;class to{constructor(){this.undoBtn=document.getElementById("undo"),this.redoBtn=document.getElementById("redo"),this.updateBtns(0,0)}onTap({target:e}){if(e==this.undoBtn)return this.undo();if(e==this.redoBtn)return this.redo()}undo(){ln()}redo(){cn()}updateBtns(e=0,n=0){this.undoBtn.toggleAttribute("disabled",e==0),this.redoBtn.toggleAttribute("disabled",n==0)}onUndoRedo({detail:e}){this.updateBtns(e.undoAbleCount,e.redoAbleCount)}}const no=new to;class io{constructor(){this.init()}init(){I.classList.replace("loading","ready"),this.viewport=Y,Ni(this),this.ui=eo,this.score=M,this.player=st,this.history=no}}const ce=new io;function On(t,e,n){const i=new Blob([t],{type:n}),r=document.createElement("a");r.style.display="none",r.href=URL.createObjectURL(i),r.download=e,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},0)}function ro(t,e,n,i,r){var s=[],o=t.getRootNode().createElement("node");o.setAttribute("type","relation");var a=t.getRootNode().createElement("label");typeof i!="undefined"&&a.setAttribute("type",i),o.appendChild(a);var d;typeof r=="undefined"?d="he-"+dt(5):d=r,o.setAttribute("xml:id",d),t.appendChild(o),s.push(o);for(var l=0;l<e.length;l++){var c=mei.createElement("arc");c.setAttribute("from","#"+d),c.setAttribute("to","#"+e[l].getAttribute("xml:id")),c.setAttribute("type","primary"),t.appendChild(c),s.push(c)}for(var l=0;l<n.length;l++){var c=mei.createElement("arc");c.setAttribute("from","#"+d),c.setAttribute("to","#"+n[l].getAttribute("xml:id")),c.setAttribute("type","secondary"),t.appendChild(c),s.push(c)}return[d,s.reverse()]}function so(t,e,n,i,r){var s=[],o=t.getRootNode().createElement("node");o.setAttribute("type","metarelation");var a=t.getRootNode().createElement("label");typeof i!="undefined"&&a.setAttribute("type",i),o.appendChild(a);var d;typeof r=="undefined"?d="he-"+Math.floor(Math.random()*(1<<20)).toString(16):d=r,o.setAttribute("xml:id",d),t.appendChild(o),s.push(o);for(var l=0;l<e.length;l++){var c=t.getRootNode().createElement("arc");c.setAttribute("from","#"+d),c.setAttribute("to","#"+e[l].getAttribute("xml:id")),c.setAttribute("type","primary"),t.appendChild(c),s.push(c)}for(var l=0;l<n.length;l++){var c=t.getRootNode().createElement("arc");c.setAttribute("from","#"+d),c.setAttribute("to","#"+n[l].getAttribute("xml:id")),c.setAttribute("type","secondary"),t.appendChild(c),s.push(c)}return[d,s.reverse()]}function oo(t,e,n){const i=n.findIndex(s=>s.nodeType==Node.ELEMENT_NODE&&(s.tagName=="note"||s.getElementsByTagName("note").length>0))==-1;if((e.tagName=="beam"||e.tagName=="measure")&&i)return null;if(e.tagName=="chord"&&i)return nr(mei,e);var r=e.cloneNode();return r.setAttribute("corresp",e.getAttribute("xml:id")),n.forEach(s=>r.appendChild(s)),r}function Un(t,e){if(e.nodeType!=Node.ELEMENT_NODE)return[e.cloneNode(),!1];var n=document.getElementById(B(t,E(e)));if(e.tagName=="note"&&(!n||n.classList.contains("hidden")))return[er(mei,e),!0];var i=Array.from(e.childNodes).map(o=>Un(t,o)),r=i.map(o=>o[0]).filter(o=>o!=null),s=r.length!=e.childNodes.length||i.find(o=>o[1])!=null;return[oo(s,e,r),s]}function ao(t=null){t||(t=V()[0]);var e=t.mei_mdiv;e.children[0];var[n,i]=Un(t,e),r=e.parentElement.getElementsByTagName("mdiv").length,s=r+"-";return mt(n,s),e.parentNode.insertBefore(n,e.nextSibling),n}function _t(t,e){if(!t.contains(e))return console.log("MDiv element not in MEI, aborting"),null;var n=ir(t),i;e.hasAttribute("xml:id")?i=y(n,e.getAttribute("xml:id")):i=n.getElementsByTagName("mdiv")[0];var r=i.parentElement;for(let s of Array.from(r.getElementsByTagName("mdiv")))s!==i&&r.removeChild(s);return n}function lo(t,e,n=!1){var i=qe(),r=Fn(!0,t),s=new XMLSerializer().serializeToString(r),o=e.children[0];i.loadData(s),i.renderToMIDI();var a=Array.from(r.getElementsByTagName("note")),d=a.map(v=>v.getAttribute("xml:id")),l={};if(d.forEach(v=>{if(!v)return;let N=i.getTimeForElement(v);l[N]?l[N].push(v):l[N]=[v]}),n){let v=Object.keys(l);l={},v.forEach(N=>l[N]=i.getElementsAtTime(Number(N)+1).notes)}var c=o.getElementsByTagName("scoreDef")[0].cloneNode(!0),g=c.getElementsByTagName("staffDef"),u=mei.createElement("mdiv");u.setAttribute("xml:id",e.getAttribute("xml:id")+"-sliced");var h=mei.createElement("score");h.setAttribute("xml:id",o.getAttribute("xml:id")+"-sliced");var m=mei.createElement("section");m.setAttribute("xml:id",o.getAttribute("xml:id")+"-slicedsection"),u.appendChild(h),h.appendChild(c),h.appendChild(m);var p=Object.keys(l);console.log(l);for(var f in p){let v=p[f],N=l[v],Q=mei.createElement("measure");Q.setAttribute("xml:id","measure-"+v),m.appendChild(Q);for(var L of g){let A=mei.createElement("staff");A.setAttribute("n",L.getAttribute("n")),Q.appendChild(A)}N.forEach(A=>{let P=y(mei,A),F=P.cloneNode(!0);F.setAttribute("corresp",A);let Zn=P.closest("staff").getAttribute("n"),It=P.closest("layer").getAttribute("n"),Tt=P.closest("chord"),Ze=Q.querySelector('staff[n="'+Zn+'"]');Ze||(console.log("Could not find staff"),abort());let ee=Ze.querySelector('layer[n="'+It+'"]');if(ee||(ee=mei.createElement("layer"),ee.setAttribute("n",It),Ze.appendChild(ee)),F.removeAttribute("dots"),F.removeAttribute("dots.ges"),Tt){let G=Tt.getAttribute("xml:id"),J=ee.querySelector('chord[corresp="'+G+'"]');J||(J=mei.createElement("chord"),J.setAttribute("corresp",G),J.setAttribute("dur",4),J.setAttribute("dur.ges",4),J.setAttribute("dur.ppq",2),ee.appendChild(J)),J.appendChild(F)}else F.setAttribute("dur",4),F.setAttribute("dur.ges",4),F.setAttribute("dur.ppq",2),ee.appendChild(F);if(f>0&&l[p[f-1]].includes(A)){F.setAttribute("xml:id",v+A);let G=mei.createElement("tie");G.setAttribute("xml:id","tie"+v+A),G.setAttribute("endid",v+A),f>1&&l[p[f-2]].includes(A)?G.setAttribute("startid",p[f-1]+A):G.setAttribute("startid",A),Q.appendChild(G)}});for(var T of Q.querySelectorAll("staff"))if(!T.querySelector("note")){let A=T.querySelector("layer");A||(A=mei.createElement("layer"),T.appendChild(A));let P=mei.createElement("rest");P.setAttribute("dur",4),P.setAttribute("dur.ges",4),P.setAttribute("dur.ppq",2),A.appendChild(P)}}return u}function co(t,e=!1){var n=t.mei_mdiv,i=lo(t,n,e),r=n.parentElement.getElementsByTagName("mdiv").length,s=r+"-";return mt(i,s),n.parentNode.insertBefore(i,n.nextSibling),i}function Rn(t,e,n){var i=[],r=t.svg_elem,s=t.id_prefix,o=s+n.getAttribute("xml:id"),a=ut(n),d=$e(e,n).map(u=>document.getElementById(B(t,j(u)))),l=W(e,n).map(u=>document.getElementById(B(t,j(u)))),c=d.concat(l);if(c.sort((u,h)=>{if(!u)return-1;if(!h)return 1;var m=C(u),p=C(h);return m[0]-p[0]?m[0]-p[0]:m[1]-p[1]}),!c[0])return console.log("Note missing, relation not drawn"),null;var g=Vt(c.map(C));return g.setAttribute("id",o),s!=""&&g.setAttribute("oldid",n.getAttribute("xml:id")),g.classList.add("relation"),g.setAttribute("type",a),X(g),ce.ui.scoreSettings.brightShades||X(g),g.addEventListener("wheel",u=>{u.preventDefault(),Oe(u.target),u.target.onmouseout()},k),g.onclick=()=>b(g),g.onmouseover=function(){d.forEach(u=>u.classList.add("extrahover")),l.forEach(u=>u.classList.add("selecthover"))},g.onmouseout=function(){d.forEach(u=>u.classList.remove("extrahover")),l.forEach(u=>u.classList.remove("selecthover"))},Ue(r,g),i.push(g),i}function $n(t,e,m){var i=[],r=t.svg_elem,s=t.id_prefix,o=s+m.getAttribute("xml:id"),a=ut(m),d=Re(e,m).map(p=>document.getElementById(t.id_prefix+E(p))),l=$e(e,m).map(p=>document.getElementById(B(t,j(p)))),c=W(e,m).map(p=>document.getElementById(B(t,j(p))));if(d.indexOf(null)!=-1)return console.log("Missing relation, not drawing metarelation"),[];var g=d.map(Zi),u=Kt(g.map(p=>p[0])),h=d.concat([r.getElementsByClassName("system")[0]]).map(p=>p.getBBox().y).sort((p,f)=>p>f)[0]-500;g.push([u,h]);var m=Be();return m.style.setProperty("--shade-alternate","#000"),m.setAttribute("id",o),m.classList.add("metarelation"),m.setAttribute("type",a),m.appendChild(Ft([u,h],200)),g.forEach(p=>{var f=Pt([u,h],p);m.appendChild(f)}),X(m),ce.ui.scoreSettings.brightShades||X(m),m.addEventListener("wheel",p=>{p.preventDefault(),Oe(p.target.closest("g")),p.target.onmouseout()},k),m.onclick=()=>b(m),m.onmouseover=function(p){l.forEach(f=>{f.classList.contains("relation")?f.classList.add("extrarelationhover"):f.children[0].classList.add("extrarelationhover")}),c.forEach(f=>{f.classList.contains("relation")?f.classList.add("relationhover"):f.children[0].classList.add("relationhover")})},m.onmouseout=function(p){l.forEach(f=>{f.classList.contains("relation")?f.classList.remove("extrarelationhover"):f.children[0].classList.remove("extrarelationhover")}),c.forEach(f=>{f.classList.contains("relation")?f.classList.remove("relationhover"):f.children[0].classList.remove("relationhover")})},Ue(r,m),i.push(m),i}window.selected=[];window.extraselected=[];ii(document);var se;window.mei=null;var x,Ut,Yn,oe,tt=new FileReader,ye,_e=[],Mt=[],S=[],ze=[];window.addEventListener("beforeunload",function(t){var e="Leave app? You may lose unsaved changes.";return t.preventDefault(),t.returnValue=e,e});w(document).ready(function(){document.getElementsByTagName("html")[0].classList.remove("loader"),Sn()});window.onerror=function(e,n,i){return document.getElementsByTagName("html")[0].classList.remove("loader"),alert(`An error occured: ${e}
 Please report the relevant console log as a GitHub issue.
 The app will try to continue running nonetheless.`),!1};function K(t,e,n=!1){if(console.debug("Using globals: selected, extraselected, mei, undo_actions"),!(selected.length==0&&extraselected==0)){var i,r;if(selected.concat(extraselected)[0].classList.contains("relation")){var s=[];selected.concat(extraselected).forEach(c=>{s.push([c.getAttribute("type"),t]);var g=Ce(c),u=[y(document,g)].concat(Zt(document,g));u.forEach(m=>m.setAttribute("type",t));var h=y(mei,g);h.getElementsByTagName("label")[0].setAttribute("type",t),u.forEach(X)}),_e.push(["change relation type",s.reverse(),selected,extraselected])}else if(selected.concat(extraselected)[0].classList.contains("note")){sr(t,extraselected,selected);var o=[],a=extraselected.map(c=>jt(x,c)),d=selected.map(c=>jt(x,c));o.push(a.concat(d)),[i,r]=ro(x,a,d,t,e),o.push(r);for(var l=0;l<S.length;l++){let c=Rn(S[l],x,y(x.getRootNode(),i));c&&(o.push(c),ht(S[l],x,y(x.getRootNode(),i)))}_e.push(["relation",o.reverse(),selected,extraselected]),selected.concat(extraselected).forEach(b)}n||Qe()}}function Qn(t){var e=selected.concat(extraselected);if(!(e.length<3||extraselected.length>2)){e.sort((r,s)=>{var[o,a]=C(r),[d,l]=C(s);return o-d});var n=e.shift(),i=e.pop();selected=selected.filter(r=>r==n||r==i),K(lt.main[t].outer),extraselected=[n,i],selected=e,K(lt.main[t].total)}}function Nt(t,e,n=!1){if(console.debug("Using globals:  mei_graph, selected, extraselected"),!(selected.length==0&&extraselected==0)){var i=Z(selected.concat(extraselected)[0]);if(i=="relation"||i=="metarelation"){var r=[],a,d,s=extraselected.map(c=>y(x.getRootNode(),Ce(c))),o=selected.map(c=>y(x.getRootNode(),Ce(c))),[a,d]=so(x,s,o,t,e);r.push(d);for(var l=0;l<S.length;l++)r.push($n(S[l],x,y(x.getRootNode(),a)));_e.push(["metarelation",r,selected,extraselected]),selected.concat(extraselected).forEach(b),n||Qe()}}}var Hn;function uo(){console.debug("Using globals: mei");var t=mei.getElementsByTagName("graph");if(t.length)return t[0];var e=mei.createElement("graph");return e.setAttribute("type","directed"),mei.getElementsByTagName("body")[0].appendChild(e),e}function ho(){var t=mei.cloneNode(!0);for(var e of S)if(!e.canSave){console.log("Trying to remove layer",e);var n=y(t,e.mei_mdiv.getAttribute("xml:id"));n.parentElement.removeChild(n),console.log("Found and tried to remove ",n)}var i=new XMLSerializer().serializeToString(t);On(i,ye+".mei","text/xml")}const Rt=t=>{const e=getComputedStyle(t);$t(t,{fill:e.fill,"fill-opacity":e.fillOpacity,opacity:e.opacity,stroke:e.stroke,"stroke-opacity":e.strokeOpacity,"stroke-width":e.strokeWidth})};function go(){const e=_().svg_elem.children[0].cloneNode(!0);document.getElementById("svg-spreadsheet").append(e);const n=e.getElementsByClassName("relation"),i=e.getElementsByClassName("metarelation");Array.from(n).forEach(Rt),Array.from(i).forEach(Rt);const r=e.getElementsByClassName("bookmark");Array.from(r).forEach(o=>o.remove());const s=new XMLSerializer().serializeToString(e);e.remove(),On(s,ye+".svg","text/xml")}function Vn(t){console.debug("Using globals: selected_extraselected, upload, reader, filenmae");const e=t.target.files;selected=[],extraselected=[],e.length==1&&(tt.onload=function(n){oe=tt.result,mo()},tt.readAsText(e[0]),ye=e[0].name.split(".").slice(0,-1).join("."),ye==""&&(ye=e[0].name))}function Pn(t){console.debug("Using globals: mei_graph, mei, selected, extraselected, document");var e=Array.from(x.getElementsByTagName("node")),n=e.filter(r=>r.getAttribute("type")=="relation"),i=e.filter(r=>r.getAttribute("type")=="metarelation");n.forEach(r=>{Rn(t,x,r)&&ht(t,x,r)}),i.forEach(r=>$n(t,x,r))}function mo(t){console.debug("Using globals data, parser, mei, jquery document, document, mei_graph, midi, changes, undo_cations, redo_actions, reduce_actions, rerendered_after_action");var e=new DOMParser;try{mei=e.parseFromString(oe,"text/xml"),mei.getElementsByTagName("parsererror").length>0&&console.log("This is not a valid XML or MEI file. However it could be ABC or Humdrum, for instance")}catch{w("#score-file-picker").val("")}if(se=new verovio.toolkit,mei.documentElement.namespaceURI!="http://www.music-encoding.org/ns/mei"){try{let d=se.renderData(oe,{pageWidth:2e4,pageHeight:1e4,breaks:"none"})}catch{if(!new_svg)return console.log("Verovio could not generate SVG from non-MEI file."),w("#score-file-picker").val(""),!1}oe=se.getMEI(),e=new DOMParser;try{mei=e.parseFromString(oe,"text/xml")}catch{return alert("Cannot parse this XML file as valid MEI."),w("#score-file-picker").val(""),!1}}else Ji(mei),tn(mei.children[0]),Xi(mei);try{x=uo()}catch{return alert("Cannot parse this XML file as valid MEI."),w("#score-file-picker").val(""),!1}S=[],ze=[],document.getElementById("layers").innerHTML="",S.hullPadding=200;var n=Array.from(mei.getElementsByTagName("body")[0].getElementsByTagName("mdiv"));for(let d in n){let l=n[d],c=l.children[0],g=_t(mei,l),[u,h]=Wn(g);if(!h)return console.log("Verovio could not generate SVG from MEI."),!1;var i=nn(),[r,s]=rn(i);s.innerHTML=h;var o={mei:g,layer_elem:i,layer_number:0,mdiv_elem:l,score_elem:c,id_mapping:je(l),number_of_views:1};const m=d==0;ze.push(o);var a={mei_mdiv:l,mei_score:c,svg_elem:s,view_elem:r,layer:o,layer_number:0,id_prefix:"",zoom:1,reductions:[],forceSaveLayer:m,lockLayer:m,canSave:!0,canEdit:!m};m?(Ut=se.renderToMIDI(),Yn=Ut):a.id_prefix=S.length,qn(a)}return _e=[],Mt=[],Hn=0,ce.ui.scoreSettings.toggleShades(!0),ce.ui.bookmarks.init(),document.onkeypress=function(d){Xr(d)},document.onkeydown=Zr,document.onkeyup=Gr,document.getElementById("layers").onclick=Jr,document.dispatchEvent(new Event("scoreload")),is(),!0}function Fn(t=!1,e=S[0]){e.svg_elem;var n=_t(mei,e.layer.mdiv_elem);return Array.from(n.getElementsByTagName("note")).forEach(i=>{let r=document.getElementById(B(e,E(i)));if(!r||r.classList.contains("hidden")){var s=i.parentNode;if(t&&!["chord","bTrem","fTrem"].includes(s.tagName)){var o=Ki(n,i);s.insertBefore(o,i)}s.removeChild(i)}}),Array.from(n.getElementsByTagName("chord")).forEach(i=>{i.parentNode,i.getElementsByTagName("note").length==0&&i.parentNode.removeChild(i)}),n}function fo(t,e=!1,n=!1){var i;e?i=co(t,n):i=ao(t);let r=i.children[0],s=_t(mei,i);var[o,a]=Wn(s);if(!a)return console.log("Verovio could not generate SVG from MEI."),!1;var d=nn(),[l,c]=rn(d);c.innerHTML=a;var g={mei:s,layer_elem:d,layer_number:ze.length,mdiv_elem:i,score_elem:r,id_mapping:je(i),number_of_views:1};ze.push(g);var u={mei_score:r,mei_mdiv:i,svg_elem:c,view_elem:l,layer:g,layer_number:g.layer_number,id_prefix:"",zoom:1,reductions:[],forceSaveLayer:!1,lockLayer:!1,canSave:!0,canEdit:!0};u.id_prefix=S.length,qn(u)}function qn(t){t.measure_map=gr(t),S.reverse(),S.push(t),S.reverse();for(let e of t.svg_elem.getElementsByClassName("note"))e.onclick=()=>b(e);console.groupCollapsed("notes output from `pitch_grid()`");for(let e of t.svg_elem.getElementsByClassName("staff")){let[n,i]=vr(e);e.y_to_p=n,e.p_to_y=i}console.groupEnd(),Pn(t),Sn()}function Wn(t){var e=new XMLSerializer().serializeToString(rr(t)),n=se.renderData(e,{pageWidth:2e4,pageHeight:1e4,breaks:"none"});return[e,n]}console.log("Main webapp library is loaded");const V=()=>S,O=()=>x,po=()=>Yn,qe=()=>se,yo=()=>oe,We=()=>_e,At=()=>Mt,vo=t=>Mt=t,bo=()=>Hn;
